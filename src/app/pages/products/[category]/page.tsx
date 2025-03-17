import { AmazonProduct, getProductsByCategory, generateAffiliateLink } from '@/lib/amazon-affiliate';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: AmazonProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const affiliateLink = generateAffiliateLink(product.id);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="aspect-w-1 aspect-h-1 relative h-64">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          {product.tags && product.tags.length > 0 && (
            <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
              {product.tags[0]}
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-2">{product.description}</p>
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
          <span className="text-gray-500 text-sm ml-1">({product.reviewCount} reviews)</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">{product.price}</span>
          <a 
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  const [sortOption, setSortOption] = useState('featured');
  const [priceFilter, setPriceFilter] = useState('all');
  const category = params.category || 'health-monitoring';
  
  // Get products for this category
  let products = getProductsByCategory(category);
  
  // Apply price filter
  if (priceFilter !== 'all') {
    products = products.filter(product => {
      const price = parseFloat(product.price.replace('$', ''));
      switch (priceFilter) {
        case 'under-50':
          return price < 50;
        case '50-100':
          return price >= 50 && price <= 100;
        case '100-200':
          return price > 100 && price <= 200;
        case 'over-200':
          return price > 200;
        default:
          return true;
      }
    });
  }
  
  // Apply sorting
  products = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        // In a real app, we'd use date fields
        return b.reviewCount - a.reviewCount;
      default: // featured
        return (b.rating * b.reviewCount) - (a.rating * a.reviewCount);
    }
  });
  
  // Format category name for display
  const formatCategoryName = (cat: string) => {
    return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  const categoryName = formatCategoryName(category);
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryName}</h1>
        <p className="text-xl text-gray-600">
          {category === 'health-monitoring' && 'Track your vital signs and health metrics with our premium monitoring devices.'}
          {category === 'supplements' && 'Support your health with our science-backed nutritional supplements.'}
          {category === 'fitness' && 'Stay active and mobile with our fitness and mobility support products.'}
          {category === 'recovery' && 'Enhance your recovery with our cutting-edge wellness solutions.'}
          {category === 'home-health' && 'Create a healthier home environment with our quality products.'}
        </p>
      </div>

      {/* Filter and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under-50">Under $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="over-200">$200+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
            <option value="newest">Newest</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Related Categories */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {category !== 'health-monitoring' && (
            <Link href="/pages/products/health-monitoring" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
              <h3 className="font-medium text-lg">Health Monitoring</h3>
            </Link>
          )}
          {category !== 'supplements' && (
            <Link href="/pages/products/supplements" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
              <h3 className="font-medium text-lg">Supplements & Nutrition</h3>
            </Link>
          )}
          {category !== 'fitness' && (
            <Link href="/pages/products/fitness" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
              <h3 className="font-medium text-lg">Fitness & Mobility</h3>
            </Link>
          )}
          {category !== 'recovery' && (
            <Link href="/pages/products/recovery" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
              <h3 className="font-medium text-lg">Wellness & Recovery</h3>
            </Link>
          )}
          {category !== 'home-health' && (
            <Link href="/pages/products/home-health" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
              <h3 className="font-medium text-lg">Kitchen & Home Health</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
