import { useState, useRef, useEffect } from 'react';
import { ChatMessage, generateChatbotResponse } from '@/lib/personalization';
import { AmazonProduct } from '@/lib/amazon-affiliate';
import Link from 'next/link';

// Product suggestion card component
const ProductSuggestionCard = ({ product }: { product: AmazonProduct }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-300 flex">
      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center flex-shrink-0">
        <span className="text-gray-400 text-xs">Image</span>
      </div>
      <div className="p-3 flex-grow">
        <h4 className="text-sm font-medium mb-1 line-clamp-1">{product.title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold">{product.price}</span>
          <Link 
            href={`/pages/products/product/${product.id}`}
            className="text-xs bg-teal-600 hover:bg-teal-700 text-white px-2 py-1 rounded transition duration-300"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your HLTHeStore assistant. I can help you find health and wellness products, answer questions about nutrition, fitness, and more. How can I assist you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState<AmazonProduct[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate processing time
    setTimeout(() => {
      // Generate response
      const response = generateChatbotResponse(userMessage.content, messages);
      
      // Add assistant message
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response.message
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setSuggestedProducts(response.suggestedProducts || []);
      setIsTyping(false);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Quick reply suggestions
  const quickReplies = [
    "Recommend products for joint pain",
    "What supplements are good for heart health?",
    "I'm looking for fitness equipment for seniors",
    "Tell me about the health quiz",
    "How can I improve my sleep?"
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Health Assistant</h1>
          <p className="text-gray-600">
            Ask questions about health products, get personalized recommendations, or learn about wellness topics.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Chat Window */}
          <div className="md:w-2/3 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 ${message.role === 'user' ? 'text-right' : ''}`}
                >
                  <div 
                    className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'user' 
                        ? 'bg-teal-600 text-white' 
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-4">
                  <div className="inline-block rounded-lg px-4 py-2 bg-white border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef}></div>
            </div>
            
            {/* Quick Replies */}
            {messages.length < 3 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputMessage(reply);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition duration-300"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  rows={2}
                ></textarea>
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === '' || isTyping}
                  className={`px-4 rounded-r-lg ${
                    inputMessage.trim() === '' || isTyping
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/3">
            {/* Product Suggestions */}
            {suggestedProducts.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 mb-6">
                <h3 className="font-bold text-lg mb-4">Suggested Products</h3>
                <div className="space-y-3">
                  {suggestedProducts.map((product) => (
                    <ProductSuggestionCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
            
            {/* Health Quiz CTA */}
            <div className="bg-teal-600 text-white rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Get Personalized Recommendations</h3>
              <p className="mb-4">
                Take our health quiz to discover products tailored to your specific needs and goals.
              </p>
              <Link href="/health-quiz" className="block w-full bg-white text-teal-600 text-center px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
