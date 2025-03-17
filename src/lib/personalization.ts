// src/lib/personalization.ts

/**
 * AI Personalization Utility Module
 * 
 * This module provides functions and types for AI-powered personalization features
 * including product recommendations, health quiz, and chatbot functionality.
 */

import { AmazonProduct, getProductsByCategory, getAllProducts } from '@/lib/amazon-affiliate';

// User preference interface
export interface UserPreferences {
  age?: number;
  healthGoals?: string[];
  healthConcerns?: string[];
  activityLevel?: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  dietaryPreferences?: string[];
  productInterests?: string[];
}

// Health quiz question interface
export interface QuizQuestion {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'range' | 'text';
  options?: {
    value: string;
    text: string;
  }[];
  min?: number;
  max?: number;
}

// Health quiz questions
export const healthQuizQuestions: QuizQuestion[] = [
  {
    id: 'age',
    text: 'What is your age?',
    type: 'range',
    min: 50,
    max: 90
  },
  {
    id: 'health_goals',
    text: 'What are your primary health goals? (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 'improve_mobility', text: 'Improve mobility and flexibility' },
      { value: 'increase_energy', text: 'Increase energy levels' },
      { value: 'manage_weight', text: 'Manage weight' },
      { value: 'reduce_pain', text: 'Reduce joint or muscle pain' },
      { value: 'improve_sleep', text: 'Improve sleep quality' },
      { value: 'heart_health', text: 'Support heart health' },
      { value: 'brain_health', text: 'Support brain health and cognition' },
      { value: 'immune_support', text: 'Strengthen immune system' }
    ]
  },
  {
    id: 'health_concerns',
    text: 'Do you have any specific health concerns? (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 'joint_pain', text: 'Joint pain or arthritis' },
      { value: 'high_blood_pressure', text: 'High blood pressure' },
      { value: 'high_cholesterol', text: 'High cholesterol' },
      { value: 'diabetes', text: 'Diabetes or blood sugar management' },
      { value: 'digestive_issues', text: 'Digestive issues' },
      { value: 'sleep_problems', text: 'Sleep problems' },
      { value: 'stress', text: 'Stress or anxiety' },
      { value: 'bone_health', text: 'Bone health/osteoporosis' },
      { value: 'none', text: 'None of the above' }
    ]
  },
  {
    id: 'activity_level',
    text: 'How would you describe your current activity level?',
    type: 'single',
    options: [
      { value: 'sedentary', text: 'Sedentary (little to no regular exercise)' },
      { value: 'light', text: 'Light activity (light walking 1-3 days/week)' },
      { value: 'moderate', text: 'Moderate activity (moderate exercise 3-5 days/week)' },
      { value: 'active', text: 'Active (vigorous exercise 3-5 days/week)' },
      { value: 'very_active', text: 'Very active (vigorous exercise 6-7 days/week)' }
    ]
  },
  {
    id: 'dietary_preferences',
    text: 'Do you follow any specific dietary preferences? (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 'vegetarian', text: 'Vegetarian' },
      { value: 'vegan', text: 'Vegan' },
      { value: 'gluten_free', text: 'Gluten-free' },
      { value: 'dairy_free', text: 'Dairy-free' },
      { value: 'keto', text: 'Keto/low-carb' },
      { value: 'mediterranean', text: 'Mediterranean' },
      { value: 'none', text: 'No specific diet' }
    ]
  },
  {
    id: 'product_interests',
    text: 'Which product categories are you most interested in? (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 'health-monitoring', text: 'Health monitoring devices' },
      { value: 'supplements', text: 'Supplements and nutrition' },
      { value: 'fitness', text: 'Fitness and mobility products' },
      { value: 'recovery', text: 'Recovery and wellness tools' },
      { value: 'home-health', text: 'Kitchen and home health products' }
    ]
  }
];

/**
 * Generate personalized product recommendations based on user preferences
 * @param preferences - User preferences from quiz or browsing behavior
 * @param count - Number of recommendations to return
 * @returns Array of recommended products
 */
export function getPersonalizedRecommendations(preferences: UserPreferences, count: number = 6): AmazonProduct[] {
  // In a real implementation, this would use a more sophisticated algorithm
  // For now, we'll use a simple rule-based approach
  
  let recommendedProducts: AmazonProduct[] = [];
  
  // If user has specified product interests, prioritize those categories
  if (preferences.productInterests && preferences.productInterests.length > 0) {
    for (const category of preferences.productInterests) {
      const categoryProducts = getProductsByCategory(category);
      recommendedProducts = [...recommendedProducts, ...categoryProducts];
    }
  } else {
    // Otherwise, get products from all categories
    recommendedProducts = getAllProducts();
  }
  
  // Filter based on health concerns
  if (preferences.healthConcerns && preferences.healthConcerns.length > 0) {
    // Simple keyword matching for demonstration
    const keywordMap: Record<string, string[]> = {
      'joint_pain': ['joint', 'arthritis', 'pain', 'mobility'],
      'high_blood_pressure': ['blood pressure', 'heart', 'monitor'],
      'high_cholesterol': ['heart', 'omega', 'cholesterol'],
      'diabetes': ['glucose', 'sugar', 'diabetes'],
      'digestive_issues': ['probiotic', 'digestive', 'gut'],
      'sleep_problems': ['sleep', 'melatonin', 'rest'],
      'stress': ['stress', 'anxiety', 'calm'],
      'bone_health': ['calcium', 'bone', 'vitamin D']
    };
    
    const relevantKeywords: string[] = [];
    preferences.healthConcerns.forEach(concern => {
      if (concern !== 'none' && keywordMap[concern]) {
        relevantKeywords.push(...keywordMap[concern]);
      }
    });
    
    if (relevantKeywords.length > 0) {
      // Boost products that match relevant keywords
      recommendedProducts.sort((a, b) => {
        const aRelevance = relevantKeywords.filter(keyword => 
          a.title.toLowerCase().includes(keyword.toLowerCase()) || 
          a.description.toLowerCase().includes(keyword.toLowerCase())
        ).length;
        
        const bRelevance = relevantKeywords.filter(keyword => 
          b.title.toLowerCase().includes(keyword.toLowerCase()) || 
          b.description.toLowerCase().includes(keyword.toLowerCase())
        ).length;
        
        return bRelevance - aRelevance;
      });
    }
  }
  
  // Deduplicate and limit to requested count
  const uniqueProductIds = new Set<string>();
  const uniqueProducts: AmazonProduct[] = [];
  
  for (const product of recommendedProducts) {
    if (!uniqueProductIds.has(product.id)) {
      uniqueProductIds.add(product.id);
      uniqueProducts.push(product);
      
      if (uniqueProducts.length >= count) {
        break;
      }
    }
  }
  
  return uniqueProducts;
}

/**
 * Process health quiz answers and generate user preferences
 * @param answers - User's answers to health quiz questions
 * @returns User preferences object
 */
export function processQuizAnswers(answers: Record<string, any>): UserPreferences {
  const preferences: UserPreferences = {};
  
  if (answers.age) {
    preferences.age = parseInt(answers.age);
  }
  
  if (answers.health_goals) {
    preferences.healthGoals = Array.isArray(answers.health_goals) 
      ? answers.health_goals 
      : [answers.health_goals];
  }
  
  if (answers.health_concerns) {
    preferences.healthConcerns = Array.isArray(answers.health_concerns) 
      ? answers.health_concerns 
      : [answers.health_concerns];
  }
  
  if (answers.activity_level) {
    preferences.activityLevel = answers.activity_level as UserPreferences['activityLevel'];
  }
  
  if (answers.dietary_preferences) {
    preferences.dietaryPreferences = Array.isArray(answers.dietary_preferences) 
      ? answers.dietary_preferences 
      : [answers.dietary_preferences];
  }
  
  if (answers.product_interests) {
    preferences.productInterests = Array.isArray(answers.product_interests) 
      ? answers.product_interests 
      : [answers.product_interests];
  }
  
  return preferences;
}

// Chatbot types and data
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  message: string;
  suggestedProducts?: AmazonProduct[];
}

/**
 * Process a user message and generate a chatbot response
 * @param message - User's message
 * @param chatHistory - Previous chat messages
 * @returns Chatbot response with optional product suggestions
 */
export function generateChatbotResponse(message: string, chatHistory: ChatMessage[]): ChatResponse {
  // In a real implementation, this would use a more sophisticated NLP approach
  // For now, we'll use a simple keyword matching system
  
  const userMessage = message.toLowerCase();
  
  // Check for greetings
  if (userMessage.match(/^(hi|hello|hey|greetings)/i)) {
    return {
      message: "Hello! I'm your HLTHeStore assistant. I can help you find health and wellness products, answer questions about nutrition, fitness, and more. How can I assist you today?"
    };
  }
  
  // Check for product recommendations
  if (userMessage.includes('recommend') || 
      userMessage.includes('suggestion') || 
      userMessage.includes('product') || 
      userMessage.includes('looking for')) {
    
    let category = '';
    let suggestedProducts: AmazonProduct[] = [];
    
    // Determine category based on keywords
    if (userMessage.includes('blood pressure') || 
        userMessage.includes('monitor') || 
        userMessage.includes('tracking') ||
        userMessage.includes('measure')) {
      category = 'health-monitoring';
      suggestedProducts = getProductsByCategory('health-monitoring').slice(0, 3);
    } 
    else if (userMessage.includes('vitamin') || 
             userMessage.includes('supplement') || 
             userMessage.includes('nutrition')) {
      category = 'supplements';
      suggestedProducts = getProductsByCategory('supplements').slice(0, 3);
    }
    else if (userMessage.includes('exercise') || 
             userMessage.includes('fitness') || 
             userMessage.includes('workout') ||
             userMessage.includes('mobility')) {
      category = 'fitness';
      suggestedProducts = getProductsByCategory('fitness').slice(0, 3);
    }
    else if (userMessage.includes('recovery') || 
             userMessage.includes('massage') || 
             userMessage.includes('therapy') ||
             userMessage.includes('pain')) {
      category = 'recovery';
      suggestedProducts = getProductsByCategory('recovery').slice(0, 3);
    }
    else if (userMessage.includes('kitchen') || 
             userMessage.includes('home') || 
             userMessage.includes('water') ||
             userMessage.includes('purifier')) {
      category = 'home-health';
      suggestedProducts = getProductsByCategory('home-health').slice(0, 3);
    }
    else {
      // General recommendations
      const allProducts = getAllProducts();
      suggestedProducts = allProducts
        .sort(() => 0.5 - Math.random()) // Simple shuffle
        .slice(0, 3);
    }
    
    return {
      message: `Based on your interest in ${category || 'health products'}, here are some recommendations that might help you. Would you like more specific suggestions?`,
      suggestedProducts
    };
  }
  
  // Check for health advice
  if (userMessage.includes('advice') || 
      userMessage.includes('help with') || 
      userMessage.includes('how to') || 
      userMessage.includes('tips')) {
    
    return {
      message: "I'd be happy to provide general wellness information, but for personalized health advice, it's best to consult with a healthcare professional. Our blog has many articles on health topics that might interest you. Would you like me to suggest some relevant articles?"
    };
  }
  
  // Check for quiz interest
  if (userMessage.includes('quiz') || 
      userMessage.includes('assessment') || 
      userMessage.includes('personalized') ||
      userMessage.includes('tailored')) {
    
    return {
      message: "Our 'Find Your Best Health Solution' quiz can help you discover products tailored to your specific needs and health goals. Would you like to take the quiz now?"
    };
  }
  
  // Default response
  return {
    message: "I'm here to help with any questions about health products, wellness information, or finding the right solutions for your needs. Could you provide more details about what you're looking for?"
  };
}
