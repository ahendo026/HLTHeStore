// src/lib/seo.ts

/**
 * SEO Utility Module
 * 
 * This module provides functions and types for SEO optimization
 * including metadata generation and structured data.
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  canonical?: string;
}

/**
 * Generate basic SEO metadata for a page
 * @param title - Page title
 * @param description - Page description
 * @param keywords - Keywords for the page
 * @returns SEO metadata object
 */
export function generateSEOMetadata(
  title: string,
  description: string,
  keywords: string[] = []
): SEOMetadata {
  return {
    title: `${title} | HLTHeStore - Health & Wellness for Active Adults`,
    description: description.length > 160 ? `${description.substring(0, 157)}...` : description,
    keywords: [
      'health', 'wellness', 'seniors', 'active adults', 'health monitoring',
      'supplements', 'fitness', 'recovery', 'home health', ...keywords
    ]
  };
}

/**
 * Generate product structured data for rich results
 * @param product - Product data
 * @returns JSON-LD structured data string
 */
export function generateProductStructuredData(product: any): string {
  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.imageUrl || 'https://hlthestore.com/default-product.jpg',
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Various'
    },
    offers: {
      '@type': 'Offer',
      url: `https://hlthestore.com/products/${product.id}`,
      priceCurrency: 'USD',
      price: product.price.replace('$', ''),
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    }
  };

  return JSON.stringify(structuredData);
}

/**
 * Generate article structured data for rich results
 * @param article - Article data
 * @returns JSON-LD structured data string
 */
export function generateArticleStructuredData(article: any): string {
  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage || 'https://hlthestore.com/default-blog.jpg',
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author.name
    },
    publisher: {
      '@type': 'Organization',
      name: 'HLTHeStore',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hlthestore.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://hlthestore.com/blog/${article.slug}`
    }
  };

  return JSON.stringify(structuredData);
}

/**
 * Generate breadcrumb structured data for rich results
 * @param breadcrumbs - Array of breadcrumb items with name and url
 * @returns JSON-LD structured data string
 */
export function generateBreadcrumbStructuredData(breadcrumbs: {name: string, url: string}[]): string {
  const itemListElement = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }));

  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement
  };

  return JSON.stringify(structuredData);
}

/**
 * Generate FAQ structured data for rich results
 * @param faqs - Array of FAQ items with question and answer
 * @returns JSON-LD structured data string
 */
export function generateFAQStructuredData(faqs: {question: string, answer: string}[]): string {
  const mainEntity = faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }));

  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'FAQPage',
    mainEntity
  };

  return JSON.stringify(structuredData);
}
