// src/lib/amazon-affiliate.ts

/**
 * Amazon Affiliate Integration Utility
 * 
 * This module provides functions for working with Amazon affiliate links
 * and product data. It supports generating affiliate links with tracking IDs
 * and formatting product data for display.
 */

// Amazon Associate tracking ID - this would be replaced with the actual ID
const AMAZON_TRACKING_ID = 'hlthestore-20';

// Base Amazon product URL
const AMAZON_BASE_URL = 'https://www.amazon.com';

/**
 * Generate an Amazon affiliate link for a product
 * @param productId - The Amazon ASIN (product ID)
 * @returns Formatted affiliate link
 */
export function generateAffiliateLink(productId: string): string {
  return `${AMAZON_BASE_URL}/dp/${productId}?tag=${AMAZON_TRACKING_ID}`;
}

/**
 * Generate an Amazon search affiliate link
 * @param searchTerm - The search term to use
 * @returns Formatted affiliate search link
 */
export function generateSearchLink(searchTerm: string): string {
  const encodedSearchTerm = encodeURIComponent(searchTerm);
  return `${AMAZON_BASE_URL}/s?k=${encodedSearchTerm}&tag=${AMAZON_TRACKING_ID}`;
}

/**
 * Product interface representing Amazon product data
 */
export interface AmazonProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
  tags?: string[];
}

/**
 * Mock product data for development
 * In production, this would be replaced with actual API calls to Amazon's Product Advertising API
 */
export const mockProducts: Record<string, AmazonProduct[]> = {
  'health-monitoring': [
    {
      id: 'B07N124XDS',
      title: 'Smart Blood Pressure Monitor',
      description: 'Wireless, easy-to-use BP monitor with smartphone app.',
      price: '$79.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.7,
      reviewCount: 42,
      category: 'health-monitoring',
      tags: ['Best Seller']
    },
    {
      id: 'B07QZWT21D',
      title: 'Digital Body Weight Scale',
      description: 'Smart scale with body composition analysis and app connectivity.',
      price: '$59.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.2,
      reviewCount: 28,
      category: 'health-monitoring',
      tags: ['New']
    },
    {
      id: 'B08DFPV5Y2',
      title: 'Advanced Fitness Tracker',
      description: 'Track steps, heart rate, sleep, and more with this waterproof wearable.',
      price: '$129.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.8,
      reviewCount: 56,
      category: 'health-monitoring'
    },
    {
      id: 'B085S5L1D9',
      title: 'Pulse Oximeter',
      description: 'Accurately measure blood oxygen levels and pulse rate at home.',
      price: '$39.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.3,
      reviewCount: 37,
      category: 'health-monitoring'
    },
    {
      id: 'B07QK9ZBGL',
      title: 'Smart Watch Health Monitor',
      description: 'Comprehensive health tracking with ECG, sleep analysis, and activity monitoring.',
      price: '$199.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.4,
      reviewCount: 19,
      category: 'health-monitoring'
    },
    {
      id: 'B07QZWT21F',
      title: 'Glucose Monitoring System',
      description: 'Simple and accurate blood glucose monitoring for diabetes management.',
      price: '$69.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.9,
      reviewCount: 48,
      category: 'health-monitoring',
      tags: ['Easy Use']
    }
  ],
  'supplements': [
    {
      id: 'B07N124XDT',
      title: 'Joint Support Formula',
      description: 'Advanced supplement for joint health and mobility.',
      price: '$34.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.2,
      reviewCount: 28,
      category: 'supplements',
      tags: ['New']
    },
    {
      id: 'B07QZWT21E',
      title: 'Omega-3 Fish Oil',
      description: 'High-potency omega-3 fatty acids for heart and brain health.',
      price: '$29.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.7,
      reviewCount: 63,
      category: 'supplements',
      tags: ['Best Seller']
    },
    {
      id: 'B08DFPV5Y3',
      title: 'Vitamin D3 + K2 Complex',
      description: 'Optimal bone and immune system support with vitamin D3 and K2.',
      price: '$24.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.8,
      reviewCount: 41,
      category: 'supplements'
    },
    {
      id: 'B085S5L1D8',
      title: 'Probiotics 50 Billion CFU',
      description: 'Advanced gut health support with 15 probiotic strains.',
      price: '$39.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.5,
      reviewCount: 37,
      category: 'supplements'
    }
  ],
  'fitness': [
    {
      id: 'B07N124XDU',
      title: 'Therapeutic Massage Gun',
      description: 'Professional-grade percussion therapy for muscle recovery.',
      price: '$129.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.9,
      reviewCount: 56,
      category: 'fitness'
    },
    {
      id: 'B07QZWT21G',
      title: 'Knee Compression Sleeve',
      description: 'Supportive knee brace for joint stability and pain relief.',
      price: '$24.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.6,
      reviewCount: 83,
      category: 'fitness',
      tags: ['Best Seller']
    },
    {
      id: 'B08DFPV5Y4',
      title: 'Resistance Bands Set',
      description: 'Complete set of resistance bands for home workouts and rehabilitation.',
      price: '$34.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.7,
      reviewCount: 29,
      category: 'fitness'
    },
    {
      id: 'B085S5L1D7',
      title: 'Adjustable Ankle Weights',
      description: 'Comfortable ankle weights for strength training and rehabilitation.',
      price: '$29.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.3,
      reviewCount: 18,
      category: 'fitness'
    }
  ],
  'recovery': [
    {
      id: 'B07N124XDV',
      title: 'Infrared Therapy Lamp',
      description: 'Deep tissue infrared heat therapy for pain relief and recovery.',
      price: '$89.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.5,
      reviewCount: 32,
      category: 'recovery'
    },
    {
      id: 'B07QZWT21H',
      title: 'Portable Ice Bath System',
      description: 'Compact cold therapy system for recovery and inflammation reduction.',
      price: '$199.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.8,
      reviewCount: 14,
      category: 'recovery',
      tags: ['New']
    },
    {
      id: 'B08DFPV5Y5',
      title: 'Compression Recovery Boots',
      description: 'Dynamic compression system for improved circulation and recovery.',
      price: '$299.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.9,
      reviewCount: 21,
      category: 'recovery'
    },
    {
      id: 'B085S5L1D6',
      title: 'Acupressure Mat and Pillow Set',
      description: 'Therapeutic acupressure mat for pain relief and relaxation.',
      price: '$49.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.4,
      reviewCount: 47,
      category: 'recovery'
    }
  ],
  'home-health': [
    {
      id: 'B07N124XDW',
      title: 'Water Purification System',
      description: 'Advanced filtration for clean, healthy drinking water.',
      price: '$89.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.4,
      reviewCount: 37,
      category: 'home-health',
      tags: ['Eco-Friendly']
    },
    {
      id: 'B07QZWT21I',
      title: 'High-Performance Blender',
      description: 'Professional-grade blender for smoothies, soups, and healthy meals.',
      price: '$149.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.7,
      reviewCount: 52,
      category: 'home-health',
      tags: ['Best Seller']
    },
    {
      id: 'B08DFPV5Y6',
      title: 'Air Purifier with HEPA Filter',
      description: 'Remove allergens, dust, and pollutants for cleaner indoor air.',
      price: '$129.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.8,
      reviewCount: 43,
      category: 'home-health'
    },
    {
      id: 'B085S5L1D5',
      title: 'Ergonomic Desk Chair',
      description: 'Supportive chair designed for proper posture and comfort.',
      price: '$199.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.5,
      reviewCount: 29,
      category: 'home-health'
    }
  ]
};

/**
 * Get products by category
 * @param category - The product category to filter by
 * @returns Array of products in the specified category
 */
export function getProductsByCategory(category: string): AmazonProduct[] {
  return mockProducts[category] || [];
}

/**
 * Get a product by ID
 * @param productId - The product ID to look up
 * @returns The product if found, undefined otherwise
 */
export function getProductById(productId: string): AmazonProduct | undefined {
  for (const category in mockProducts) {
    const product = mockProducts[category].find(p => p.id === productId);
    if (product) return product;
  }
  return undefined;
}

/**
 * Get featured products across categories
 * @param count - Number of products to return
 * @returns Array of featured products
 */
export function getFeaturedProducts(count: number = 4): AmazonProduct[] {
  const allProducts = Object.values(mockProducts).flat();
  // Sort by rating and review count to get "featured" products
  return allProducts
    .sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount))
    .slice(0, count);
}

/**
 * Search products by keyword
 * @param keyword - The search term
 * @returns Array of matching products
 */
export function searchProducts(keyword: string): AmazonProduct[] {
  const searchTerm = keyword.toLowerCase();
  const allProducts = Object.values(mockProducts).flat();
  
  return allProducts.filter(product => 
    product.title.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
}
