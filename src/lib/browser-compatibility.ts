// src/lib/browser-compatibility.ts

/**
 * Browser Compatibility Utility Module
 * 
 * This module provides functions and configurations for ensuring
 * cross-browser compatibility across different browsers and devices.
 */

/**
 * Supported browsers configuration
 * Defines the minimum supported browser versions
 */
export const supportedBrowsers = {
  chrome: 60,
  firefox: 60,
  safari: 12,
  edge: 79, // Chromium-based Edge
  opera: 47,
  samsung: 9,
  ie: false // Internet Explorer not supported
};

/**
 * Feature detection utilities
 * Functions to detect browser support for various features
 */
export const featureDetection = {
  /**
   * Check if CSS Grid is supported
   * @returns Boolean indicating if CSS Grid is supported
   */
  supportsGrid(): boolean {
    if (typeof window === 'undefined') return true;
    return 'CSS' in window && 'supports' in CSS && CSS.supports('display', 'grid');
  },
  
  /**
   * Check if CSS Custom Properties (variables) are supported
   * @returns Boolean indicating if CSS Custom Properties are supported
   */
  supportsCustomProperties(): boolean {
    if (typeof window === 'undefined') return true;
    return 'CSS' in window && 'supports' in CSS && CSS.supports('(--a: 0)');
  },
  
  /**
   * Check if Intersection Observer API is supported
   * @returns Boolean indicating if Intersection Observer is supported
   */
  supportsIntersectionObserver(): boolean {
    if (typeof window === 'undefined') return true;
    return 'IntersectionObserver' in window;
  },
  
  /**
   * Check if Fetch API is supported
   * @returns Boolean indicating if Fetch API is supported
   */
  supportsFetch(): boolean {
    if (typeof window === 'undefined') return true;
    return 'fetch' in window;
  },
  
  /**
   * Check if LocalStorage is supported
   * @returns Boolean indicating if LocalStorage is supported
   */
  supportsLocalStorage(): boolean {
    if (typeof window === 'undefined') return true;
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
};

/**
 * Browser detection utility
 * @returns Object with browser name and version
 */
export function detectBrowser(): { name: string; version: number } {
  if (typeof window === 'undefined') {
    return { name: 'unknown', version: 0 };
  }
  
  const userAgent = navigator.userAgent;
  let browser = 'unknown';
  let version = 0;
  
  // Chrome
  if (/Chrome/.test(userAgent) && !/Chromium|Edge|Edg|OPR|Opera/.test(userAgent)) {
    browser = 'chrome';
    const match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = parseInt(match[1], 10);
  }
  // Firefox
  else if (/Firefox/.test(userAgent)) {
    browser = 'firefox';
    const match = userAgent.match(/Firefox\/(\d+)/);
    if (match) version = parseInt(match[1], 10);
  }
  // Safari
  else if (/Safari/.test(userAgent) && !/Chrome|Chromium|Edge|Edg|OPR|Opera/.test(userAgent)) {
    browser = 'safari';
    const match = userAgent.match(/Version\/(\d+)/);
    if (match) version = parseInt(match[1], 10);
  }
  // Edge (Chromium)
  else if (/Edg/.test(userAgent)) {
    browser = 'edge';
    const match = userAgent.match(/Edg\/(\d+)/);
    if (match) version = parseInt(match[1], 10);
  }
  // Opera
  else if (/OPR|Opera/.test(userAgent)) {
    browser = 'opera';
    const match = userAgent.match(/(?:OPR|Opera)\/(\d+)/);
    if (match) version = parseInt(match[1], 10);
  }
  // Samsung Internet
  else if (/SamsungBrowser/.test(userAgent)) {
    browser = 'samsung';
    const match = userAgent.match(/SamsungBrowser\/(\d+)/);
    if (match) version = parseInt(match[1], 10);
  }
  // Internet Explorer
  else if (/Trident/.test(userAgent)) {
    browser = 'ie';
    const match = userAgent.match(/(?:MSIE |rv:)(\d+)/);
    if (match) version = parseInt(match[1], 10);
  }
  
  return { name: browser, version };
}

/**
 * Check if the current browser is supported
 * @returns Boolean indicating if the current browser is supported
 */
export function isBrowserSupported(): boolean {
  const { name, version } = detectBrowser();
  
  // If browser is not in our support list, assume it's not supported
  if (!(name in supportedBrowsers)) {
    return false;
  }
  
  // If browser is explicitly set to false (like IE), it's not supported
  if (supportedBrowsers[name] === false) {
    return false;
  }
  
  // Check if browser version meets minimum requirements
  return version >= supportedBrowsers[name];
}

/**
 * Get fallback strategies for unsupported features
 * @returns Object with fallback strategies for various features
 */
export function getFallbackStrategies() {
  return {
    // CSS Grid fallback
    grid: {
      supported: featureDetection.supportsGrid(),
      fallback: 'Use flexbox-based layouts as fallback for CSS Grid'
    },
    // CSS Custom Properties fallback
    customProperties: {
      supported: featureDetection.supportsCustomProperties(),
      fallback: 'Use static color values and sizes as fallback for CSS Custom Properties'
    },
    // Intersection Observer fallback
    intersectionObserver: {
      supported: featureDetection.supportsIntersectionObserver(),
      fallback: 'Use scroll event listeners as fallback for Intersection Observer'
    },
    // Fetch API fallback
    fetch: {
      supported: featureDetection.supportsFetch(),
      fallback: 'Use XMLHttpRequest as fallback for Fetch API'
    },
    // LocalStorage fallback
    localStorage: {
      supported: featureDetection.supportsLocalStorage(),
      fallback: 'Use cookies as fallback for LocalStorage'
    }
  };
}

/**
 * Apply polyfills for missing browser features
 * This function should be called early in the application lifecycle
 */
export function applyPolyfills(): void {
  if (typeof window === 'undefined') return;
  
  // Polyfill for Intersection Observer
  if (!featureDetection.supportsIntersectionObserver()) {
    import('intersection-observer').then(() => {
      console.log('Intersection Observer polyfill applied');
    });
  }
  
  // Polyfill for fetch
  if (!featureDetection.supportsFetch()) {
    import('whatwg-fetch').then(() => {
      console.log('Fetch API polyfill applied');
    });
  }
  
  // Other polyfills can be added as needed
}

/**
 * Generate browser compatibility warning for unsupported browsers
 * @returns Warning message if browser is not supported, empty string otherwise
 */
export function generateBrowserWarning(): string {
  if (typeof window === 'undefined') return '';
  
  if (!isBrowserSupported()) {
    const { name, version } = detectBrowser();
    return `Your browser (${name} ${version}) is not fully supported. For the best experience, please use a modern browser like Chrome, Firefox, Safari, or Edge.`;
  }
  
  return '';
}
