import { useState } from 'react';
import { QuizQuestion, healthQuizQuestions, processQuizAnswers, getPersonalizedRecommendations } from '@/lib/personalization';
import { AmazonProduct } from '@/lib/amazon-affiliate';
import Link from 'next/link';

// Product recommendation card component
const ProductRecommendationCard = ({ product }: { product: AmazonProduct }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="aspect-w-1 aspect-h-1 relative h-48">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">{product.price}</span>
          <Link 
            href={`/pages/products/product/${product.id}`}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

// Single choice question component
const SingleChoiceQuestion = ({ 
  question, 
  value, 
  onChange 
}: { 
  question: QuizQuestion, 
  value: string, 
  onChange: (value: string) => void 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options?.map((option) => (
          <label key={option.value} className="flex items-start">
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="mt-1 mr-3"
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// Multiple choice question component
const MultipleChoiceQuestion = ({ 
  question, 
  values, 
  onChange 
}: { 
  question: QuizQuestion, 
  values: string[], 
  onChange: (values: string[]) => void 
}) => {
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      // If selecting "None", deselect all others
      if (value === 'none') {
        onChange(['none']);
      } else {
        // If selecting something else, remove "None" if present
        const newValues = values.filter(v => v !== 'none');
        onChange([...newValues, value]);
      }
    } else {
      onChange(values.filter(v => v !== value));
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options?.map((option) => (
          <label key={option.value} className="flex items-start">
            <input
              type="checkbox"
              name={question.id}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={(e) => handleChange(option.value, e.target.checked)}
              className="mt-1 mr-3"
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// Range question component
const RangeQuestion = ({ 
  question, 
  value, 
  onChange 
}: { 
  question: QuizQuestion, 
  value: number, 
  onChange: (value: number) => void 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={question.min || 0}
          max={question.max || 100}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full"
        />
        <span className="text-lg font-medium w-12 text-center">{value}</span>
      </div>
    </div>
  );
};

export default function HealthQuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({
    age: 65,
    health_goals: [],
    health_concerns: [],
    activity_level: '',
    dietary_preferences: [],
    product_interests: []
  });
  const [recommendations, setRecommendations] = useState<AmazonProduct[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleSingleChoice = (questionId: string, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };
  
  const handleMultipleChoice = (questionId: string, values: string[]) => {
    setAnswers({
      ...answers,
      [questionId]: values
    });
  };
  
  const handleRangeChange = (questionId: string, value: number) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };
  
  const handleNext = () => {
    if (currentStep < healthQuizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process answers and generate recommendations
      const userPreferences = processQuizAnswers(answers);
      const personalizedRecommendations = getPersonalizedRecommendations(userPreferences);
      setRecommendations(personalizedRecommendations);
      setQuizCompleted(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({
      age: 65,
      health_goals: [],
      health_concerns: [],
      activity_level: '',
      dietary_preferences: [],
      product_interests: []
    });
    setRecommendations([]);
    setQuizCompleted(false);
  };
  
  const currentQuestion = healthQuizQuestions[currentStep];
  const isLastQuestion = currentStep === healthQuizQuestions.length - 1;
  
  // Check if current question has a valid answer
  const isCurrentQuestionAnswered = () => {
    const answer = answers[currentQuestion.id];
    
    if (currentQuestion.type === 'single') {
      return !!answer;
    } else if (currentQuestion.type === 'multiple') {
      return Array.isArray(answer) && answer.length > 0;
    } else if (currentQuestion.type === 'range') {
      return typeof answer === 'number';
    }
    
    return false;
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {!quizCompleted ? (
          <>
            {/* Quiz Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Find Your Best Health Solution</h1>
              <p className="text-xl text-gray-600">
                Answer a few questions to get personalized product recommendations tailored to your health needs and goals.
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-teal-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / healthQuizQuestions.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-right text-sm text-gray-500 mt-2">
                Question {currentStep + 1} of {healthQuizQuestions.length}
              </div>
            </div>
            
            {/* Question */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              {currentQuestion.type === 'single' && (
                <SingleChoiceQuestion
                  question={currentQuestion}
                  value={answers[currentQuestion.id] || ''}
                  onChange={(value) => handleSingleChoice(currentQuestion.id, value)}
                />
              )}
              
              {currentQuestion.type === 'multiple' && (
                <MultipleChoiceQuestion
                  question={currentQuestion}
                  values={answers[currentQuestion.id] || []}
                  onChange={(values) => handleMultipleChoice(currentQuestion.id, values)}
                />
              )}
              
              {currentQuestion.type === 'range' && (
                <RangeQuestion
                  question={currentQuestion}
                  value={answers[currentQuestion.id] || (currentQuestion.min || 0)}
                  onChange={(value) => handleRangeChange(currentQuestion.id, value)}
                />
              )}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentStep === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!isCurrentQuestionAnswered()}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    !isCurrentQuestionAnswered()
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  {isLastQuestion ? 'Get Recommendations' : 'Next'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Results Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Your Personalized Recommendations</h1>
              <p className="text-xl text-gray-600">
                Based on your responses, we've selected these products to help you achieve your health goals.
              </p>
            </div>
            
            {/* Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {recommendations.map((product) => (
                <ProductRecommendationCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                onClick={handleRestart}
                className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-3 rounded-lg font-medium"
              >
                Retake Quiz
              </button>
              
              <Link
                href="/pages/products"
                className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-lg font-medium text-center"
              >
                Browse All Products
              </Link>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Save Your Recommendations</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter to save your personalized recommendations and receive updates on new products that match your health profile.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 flex-grow max-w-md"
                  />
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
