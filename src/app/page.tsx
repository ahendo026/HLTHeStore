import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Wellness Products for Active Adults</h1>
              <p className="text-xl mb-6">Discover science-backed products to help you live your healthiest life at any age.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pages/products" className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg transition duration-300">
                  Shop Now
                </Link>
                <Link href="/pages/blog" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 rounded-lg font-medium text-lg transition duration-300">
                  Read More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative h-64 md:h-80">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Hero Image Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Health Monitoring */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-1 aspect-h-1 relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Health Monitoring</h3>
                <p className="text-gray-600 mb-4">Track your vital signs with our premium devices.</p>
                <Link href="/pages/products/health-monitoring" className="text-teal-600 hover:text-teal-800 font-medium">
                  View Products →
                </Link>
              </div>
            </div>

            {/* Supplements */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-1 aspect-h-1 relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Supplements</h3>
                <p className="text-gray-600 mb-4">Science-backed nutrition for optimal health.</p>
                <Link href="/pages/products/supplements" className="text-teal-600 hover:text-teal-800 font-medium">
                  View Products →
                </Link>
              </div>
            </div>

            {/* Fitness & Mobility */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-1 aspect-h-1 relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Fitness & Mobility</h3>
                <p className="text-gray-600 mb-4">Stay active with our mobility support products.</p>
                <Link href="/pages/products/fitness" className="text-teal-600 hover:text-teal-800 font-medium">
                  View Products →
                </Link>
              </div>
            </div>

            {/* Recovery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-1 aspect-h-1 relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Recovery</h3>
                <p className="text-gray-600 mb-4">Enhance your recovery with cutting-edge solutions.</p>
                <Link href="/pages/products/recovery" className="text-teal-600 hover:text-teal-800 font-medium">
                  View Products →
                </Link>
              </div>
            </div>

            {/* Home Health */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-1 aspect-h-1 relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Home Health</h3>
                <p className="text-gray-600 mb-4">Create a healthier home environment.</p>
                <Link href="/pages/products/home-health" className="text-teal-600 hover:text-teal-800 font-medium">
                  View Products →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h3 className="text-lg font-semibold">Joint Support Formula</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">New</span>
                </div>
                <p className="text-gray-600 mb-2">Advanced supplement for joint health and mobility.</p>
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
                  <span className="text-lg font-bold">$34.99</span>
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
                  <h3 className="text-lg font-semibold">Therapeutic Massage Gun</h3>
                </div>
                <p className="text-gray-600 mb-2">Professional-grade percussion therapy for muscle recovery.</p>
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
                  <h3 className="text-lg font-semibold">Water Purification System</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Eco-Friendly</span>
                </div>
                <p className="text-gray-600 mb-2">Advanced filtration for clean, healthy drinking water.</p>
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
                  <span className="text-lg font-bold">$89.99</span>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/pages/products" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Health & Wellness Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-teal-600 text-sm font-medium mb-2">Nutrition</div>
                <h3 className="text-xl font-semibold mb-2">Essential Nutrients for Adults Over 50</h3>
                <p className="text-gray-600 mb-4">Discover the key vitamins and minerals that become increasingly important as we age.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">March 15, 2025</span>
                  <Link href="/pages/blog/essential-nutrients" className="text-teal-600 hover:text-teal-800 font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-teal-600 text-sm font-medium mb-2">Fitness</div>
                <h3 className="text-xl font-semibold mb-2">Low-Impact Exercises for Joint Health</h3>
                <p className="text-gray-600 mb-4">Stay active and protect your joints with these effective low-impact workout routines.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">March 10, 2025</span>
                  <Link href="/pages/blog/low-impact-exercises" className="text-teal-600 hover:text-teal-800 font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-teal-600 text-sm font-medium mb-2">Health Technology</div>
                <h3 className="text-xl font-semibold mb-2">How Wearable Tech Can Improve Your Health</h3>
                <p className="text-gray-600 mb-4">Learn how the latest wearable devices can help you monitor and improve your health metrics.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">March 5, 2025</span>
                  <Link href="/pages/blog/wearable-tech-health" className="text-teal-600 hover:text-teal-800 font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/pages/blog" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition duration-300">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Margaret J.</h4>
                  <p className="text-gray-500 text-sm">Age 62, Fitness Enthusiast</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">"The massage gun I purchased has been a game-changer for my recovery after tennis. My mobility has improved significantly, and I'm experiencing much less discomfort."</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Robert T.</h4>
                  <p className="text-gray-500 text-sm">Age 58, Health Conscious</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">"I've been using the blood pressure monitor daily, and it's so easy to use. The app helps me track my readings over time, and I can share the data directly with my doctor."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Susan M.</h4>
                  <p className="text-gray-500 text-sm">Age 67, Nutrition Advocate</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <p className="text-gray-600 italic">"The supplements I ordered arrived quickly and were exactly as described. I appreciate the detailed information about ingredients and the blog articles about nutrition have been very informative."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Quiz CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Find Your Best Health Solution</h2>
              <p className="text-xl mb-6">Take our personalized health quiz and discover products tailored to your specific needs and goals.</p>
            </div>
            <div>
              <Link href="/health-quiz" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition duration-300">
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe for Updates</h2>
          <p className="text-xl text-gray-600 mb-8">Get the latest health tips, product recommendations, and exclusive offers delivered to your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 flex-grow max-w-md"
            />
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">By subscribing, you agree to receive marketing emails from HLTHeStore. You can unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
