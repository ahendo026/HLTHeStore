import Link from 'next/link';

export default function ProductCategoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Health Monitoring Devices</h1>
        <p className="text-xl text-gray-600">Track your vital signs and health metrics with our premium monitoring devices.</p>
      </div>

      {/* Filter and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
              <option>All Products</option>
              <option>Blood Pressure Monitors</option>
              <option>Weight Scales</option>
              <option>Fitness Trackers</option>
              <option>Heart Rate Monitors</option>
              <option>Sleep Trackers</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
              <option>All Brands</option>
              <option>Omron</option>
              <option>Withings</option>
              <option>Fitbit</option>
              <option>Garmin</option>
              <option>iHealth</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
              <option>Price Range</option>
              <option>Under $50</option>
              <option>$50 - $100</option>
              <option>$100 - $200</option>
              <option>$200+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
            <option>Newest</option>
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
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="aspect-w-1 aspect-h-1 relative h-64">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Smart Blood Pressure Monitor</h3>
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Best Seller</span>
            </div>
            <p className="text-gray-600 mb-2">Wireless, easy-to-use BP monitor with smartphone app.</p>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-1">(42 reviews)</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">$79.99</span>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="aspect-w-1 aspect-h-1 relative h-64">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Digital Body Weight Scale</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">New</span>
            </div>
            <p className="text-gray-600 mb-2">Smart scale with body composition analysis and app connectivity.</p>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-gray-500 text-sm ml-1">(28 reviews)</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">$59.99</span>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="aspect-w-1 aspect-h-1 relative h-64">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Advanced Fitness Tracker</h3>
            </div>
            <p className="text-gray-600 mb-2">Track steps, heart rate, sleep, and more with this waterproof wearable.</p>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-1">(56 reviews)</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">$129.99</span>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="aspect-w-1 aspect-h-1 relative h-64">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Pulse Oximeter</h3>
            </div>
            <p className="text-gray-600 mb-2">Accurately measure blood oxygen levels and pulse rate at home.</p>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-gray-500 text-sm ml-1">(37 reviews)</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">$39.99</span>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="aspect-w-1 aspect-h-1 relative h-64">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Smart Watch Health Monitor</h3>
            </div>
            <p className="text-gray-600 mb-2">Comprehensive health tracking with ECG, sleep analysis, and activity monitoring.</p>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-gray-500 text-sm ml-1">(19 reviews)</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">$199.99</span>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="aspect-w-1 aspect-h-1 relative h-64">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Glucose Monitoring System</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Easy Use</span>
            </div>
            <p className="text-gray-600 mb-2">Simple and accurate blood glucose monitoring for diabetes management.</p>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-1">(48 reviews)</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">$69.99</span>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Previous
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-teal-600 font-medium">
            1
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            2
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            3
          </a>
          <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Next
          </a>
        </nav>
      </div>

      {/* Related Categories */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/pages/products/supplements" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
            <h3 className="font-medium text-lg">Supplements & Nutrition</h3>
          </Link>
          <Link href="/pages/products/fitness" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
            <h3 className="font-medium text-lg">Fitness & Mobility</h3>
          </Link>
          <Link href="/pages/products/recovery" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
            <h3 className="font-medium text-lg">Wellness & Recovery</h3>
          </Link>
          <Link href="/pages/products/home-health" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition duration-300">
            <h3 className="font-medium text-lg">Kitchen & Home Health</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
