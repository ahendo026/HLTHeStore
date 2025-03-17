import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              HLTHeStore
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-teal-600 font-medium text-lg flex items-center">
                Products
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
                <Link href="/pages/products/health-monitoring" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Health Monitoring
                </Link>
                <Link href="/pages/products/supplements" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Supplements & Nutrition
                </Link>
                <Link href="/pages/products/fitness" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Fitness & Mobility
                </Link>
                <Link href="/pages/products/recovery" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Wellness & Recovery
                </Link>
                <Link href="/pages/products/home-health" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Kitchen & Home Health
                </Link>
              </div>
            </div>
            <Link href="/pages/blog" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
              Blog
            </Link>
            <Link href="/pages/about" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
              About
            </Link>
            <Link href="/pages/contact" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
              Contact
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-teal-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <Link href="/cart" className="text-gray-700 hover:text-teal-600 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-teal-600"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                Home
              </Link>
              <div className="space-y-2">
                <button className="text-gray-700 hover:text-teal-600 font-medium text-lg flex items-center">
                  Products
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="pl-4 space-y-2">
                  <Link href="/pages/products/health-monitoring" className="block text-gray-700 hover:text-teal-600">
                    Health Monitoring
                  </Link>
                  <Link href="/pages/products/supplements" className="block text-gray-700 hover:text-teal-600">
                    Supplements & Nutrition
                  </Link>
                  <Link href="/pages/products/fitness" className="block text-gray-700 hover:text-teal-600">
                    Fitness & Mobility
                  </Link>
                  <Link href="/pages/products/recovery" className="block text-gray-700 hover:text-teal-600">
                    Wellness & Recovery
                  </Link>
                  <Link href="/pages/products/home-health" className="block text-gray-700 hover:text-teal-600">
                    Kitchen & Home Health
                  </Link>
                </div>
              </div>
              <Link href="/pages/blog" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                Blog
              </Link>
              <Link href="/pages/about" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                About
              </Link>
              <Link href="/pages/contact" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <button className="text-gray-700 hover:text-teal-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
                <Link href="/cart" className="text-gray-700 hover:text-teal-600 relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
