// src/lib/performance.ts

/**
 * Performance Optimization Utility Module
 * 
 * This module provides functions for optimizing website performance
 * including image optimization, lazy loading, and code splitting.
 */

/**
 * Image optimization configuration
 * Defines optimal image sizes for different components and viewports
 */
export const imageOptimizationConfig = {
  // Homepage hero image
  hero: {
    desktop: { width: 1920, height: 800, quality: 80 },
    tablet: { width: 1024, height: 500, quality: 80 },
    mobile: { width: 640, height: 400, quality: 80 }
  },
  // Product images
  product: {
    thumbnail: { width: 300, height: 300, quality: 80 },
    detail: { width: 600, height: 600, quality: 85 },
    gallery: { width: 1200, height: 800, quality: 85 }
  },
  // Blog images
  blog: {
    thumbnail: { width: 400, height: 225, quality: 80 },
    featured: { width: 1200, height: 675, quality: 85 },
    content: { width: 800, height: 450, quality: 80 }
  },
  // Category images
  category: {
    thumbnail: { width: 400, height: 400, quality: 80 },
    banner: { width: 1200, height: 300, quality: 80 }
  }
};

/**
 * Lazy loading configuration
 * Defines which components should be lazy loaded and their loading strategies
 */
export const lazyLoadingConfig = {
  // Components to lazy load
  components: [
    'ProductRecommendations',
    'RelatedProducts',
    'BlogSidebar',
    'ChatbotInterface',
    'NewsletterSignup',
    'TestimonialCarousel'
  ],
  // Sections to lazy load
  sections: [
    'ProductReviews',
    'BlogComments',
    'FAQSection',
    'HealthQuizResults'
  ],
  // Default loading strategy
  defaultStrategy: {
    loading: 'lazy',
    threshold: 0.1, // 10% of the element visible
    delay: 200 // 200ms delay before loading
  }
};

/**
 * Code splitting configuration
 * Defines which routes and components should be code-split
 */
export const codeSplittingConfig = {
  // Routes to code-split
  routes: [
    '/pages/products',
    '/pages/blog',
    '/health-quiz',
    '/chat-assistant'
  ],
  // Dynamic imports for heavy components
  components: [
    'ProductFilterSidebar',
    'HealthQuizForm',
    'ChatbotInterface',
    'BlogEditor',
    'ProductGallery'
  ]
};

/**
 * Font optimization configuration
 * Defines font loading and display strategies
 */
export const fontOptimizationConfig = {
  // Font display strategy
  display: 'swap',
  // Preload critical fonts
  preload: [
    {
      family: 'Inter',
      weights: [400, 500, 600, 700],
      styles: ['normal']
    }
  ],
  // Font subsets to include
  subsets: ['latin'],
  // Fallback font metrics
  fallbackFonts: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  }
};

/**
 * Cache control configuration
 * Defines caching strategies for different asset types
 */
export const cacheControlConfig = {
  // Static assets
  static: {
    maxAge: 31536000, // 1 year
    staleWhileRevalidate: 86400 // 1 day
  },
  // HTML pages
  html: {
    maxAge: 3600, // 1 hour
    staleWhileRevalidate: 86400 // 1 day
  },
  // API responses
  api: {
    maxAge: 60, // 1 minute
    staleWhileRevalidate: 3600 // 1 hour
  }
};

/**
 * Generate cache control headers for different asset types
 * @param type - Type of asset (static, html, api)
 * @returns Cache control header value
 */
export function generateCacheControlHeaders(type: 'static' | 'html' | 'api'): string {
  const config = cacheControlConfig[type];
  return `public, max-age=${config.maxAge}, s-maxage=${config.maxAge}, stale-while-revalidate=${config.staleWhileRevalidate}`;
}

/**
 * Generate resource hints for critical assets
 * @returns Object with preload, prefetch, and preconnect URLs
 */
export function generateResourceHints() {
  return {
    preload: [
      // Critical CSS
      { href: '/styles/critical.css', as: 'style' },
      // Critical fonts
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }
    ],
    prefetch: [
      // Likely next pages
      { href: '/pages/products' },
      { href: '/pages/blog' }
    ],
    preconnect: [
      // Third-party domains
      { href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' },
      { href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { href: 'https://www.amazon.com', crossOrigin: 'anonymous' }
    ]
  };
}
