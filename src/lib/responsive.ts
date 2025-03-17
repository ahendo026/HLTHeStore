// src/lib/responsive.ts

/**
 * Responsive Design Utility Module
 * 
 * This module provides functions and configurations for ensuring
 * responsive design and mobile optimization across the website.
 */

/**
 * Breakpoint definitions for responsive design
 */
export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

/**
 * Typography scale for responsive text sizing
 */
export const typographyScale = {
  // Base sizes (mobile first)
  base: {
    h1: '2rem',    // 32px
    h2: '1.5rem',  // 24px
    h3: '1.25rem', // 20px
    h4: '1.125rem',// 18px
    body: '1rem',  // 16px
    small: '0.875rem', // 14px
    xs: '0.75rem'  // 12px
  },
  // Medium screens (tablets)
  md: {
    h1: '2.5rem',  // 40px
    h2: '1.75rem', // 28px
    h3: '1.5rem',  // 24px
    h4: '1.25rem', // 20px
    body: '1rem',  // 16px
    small: '0.875rem', // 14px
    xs: '0.75rem'  // 12px
  },
  // Large screens (desktops)
  lg: {
    h1: '3rem',    // 48px
    h2: '2.25rem', // 36px
    h3: '1.75rem', // 28px
    h4: '1.5rem',  // 24px
    body: '1.125rem', // 18px
    small: '0.875rem', // 14px
    xs: '0.75rem'  // 12px
  }
};

/**
 * Spacing scale for responsive margins and padding
 */
export const spacingScale = {
  // Base spacing (mobile first)
  base: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem'  // 64px
  },
  // Medium screens (tablets)
  md: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '2rem',    // 32px
    xl: '3rem',    // 48px
    '2xl': '4rem', // 64px
    '3xl': '5rem'  // 80px
  },
  // Large screens (desktops)
  lg: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '2rem',    // 32px
    xl: '4rem',    // 64px
    '2xl': '6rem', // 96px
    '3xl': '8rem'  // 128px
  }
};

/**
 * Container widths for different screen sizes
 */
export const containerWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

/**
 * Touch target size recommendations for mobile optimization
 */
export const touchTargets = {
  minimum: '44px', // Minimum recommended touch target size
  comfortable: '48px', // Comfortable touch target size
  spacing: '8px' // Minimum spacing between touch targets
};

/**
 * Accessibility enhancements for responsive design
 */
export const accessibilityEnhancements = {
  // Minimum font sizes for readability
  minFontSizes: {
    body: '16px',
    inputs: '16px' // Prevents zoom on focus in iOS
  },
  // Color contrast ratios
  contrastRatios: {
    normalText: 4.5, // WCAG AA for normal text
    largeText: 3,    // WCAG AA for large text
    uiComponents: 3  // WCAG AA for UI components
  },
  // Focus states
  focus: {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: '#2563eb', // Blue focus ring
    outlineOffset: '2px'
  }
};

/**
 * Responsive layout patterns
 */
export const layoutPatterns = {
  // Grid configurations
  grids: {
    products: {
      mobile: 1,  // 1 column on mobile
      tablet: 2,  // 2 columns on tablet
      desktop: 3, // 3 columns on desktop
      wide: 4     // 4 columns on wide screens
    },
    blog: {
      mobile: 1,  // 1 column on mobile
      tablet: 2,  // 2 columns on tablet
      desktop: 3  // 3 columns on desktop
    }
  },
  // Sidebar configurations
  sidebars: {
    position: {
      mobile: 'bottom', // Sidebar at bottom on mobile
      tablet: 'right',  // Sidebar on right on tablet and up
      desktop: 'right'
    },
    width: {
      tablet: '30%',   // 30% width on tablet
      desktop: '25%'   // 25% width on desktop
    }
  }
};

/**
 * Generate responsive CSS classes for an element
 * @param element - Element type (container, heading, etc.)
 * @param variant - Variant of the element
 * @returns CSS classes for responsive styling
 */
export function getResponsiveClasses(element: string, variant?: string): string {
  switch (element) {
    case 'container':
      return 'w-full px-4 mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl';
    
    case 'heading':
      switch (variant) {
        case 'h1':
          return 'text-2xl md:text-3xl lg:text-4xl font-bold';
        case 'h2':
          return 'text-xl md:text-2xl lg:text-3xl font-bold';
        case 'h3':
          return 'text-lg md:text-xl lg:text-2xl font-semibold';
        case 'h4':
          return 'text-base md:text-lg lg:text-xl font-semibold';
        default:
          return 'text-xl md:text-2xl font-bold';
      }
    
    case 'button':
      switch (variant) {
        case 'primary':
          return 'px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg min-h-[44px] min-w-[44px]';
        case 'secondary':
          return 'px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-lg min-h-[44px] min-w-[44px]';
        case 'icon':
          return 'p-2 md:p-3 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center';
        default:
          return 'px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg min-h-[44px] min-w-[44px]';
      }
    
    case 'grid':
      switch (variant) {
        case 'products':
          return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6';
        case 'blog':
          return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
        default:
          return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
      }
    
    case 'flex':
      switch (variant) {
        case 'between':
          return 'flex flex-col md:flex-row justify-between items-center gap-4';
        case 'center':
          return 'flex flex-col md:flex-row justify-center items-center gap-4';
        default:
          return 'flex flex-col md:flex-row items-center gap-4';
      }
    
    case 'section':
      return 'py-8 md:py-12 lg:py-16';
    
    case 'card':
      return 'p-4 md:p-6 rounded-lg';
    
    default:
      return '';
  }
}

/**
 * Check if the current viewport is mobile
 * @returns Boolean indicating if viewport is mobile
 */
export function isMobileViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoints.md;
}

/**
 * Check if the current viewport is tablet
 * @returns Boolean indicating if viewport is tablet
 */
export function isTabletViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
}

/**
 * Check if the current viewport is desktop
 * @returns Boolean indicating if viewport is desktop
 */
export function isDesktopViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.lg;
}
