import { BlogPost, getAllBlogPosts, getBlogPostsByCategory } from '@/lib/blog';
import Link from 'next/link';
import { useState } from 'react';

// Blog post card component
const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="aspect-w-16 aspect-h-9 relative h-48">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Blog Image</span>
        </div>
      </div>
      <div className="p-6">
        <div className="text-teal-600 text-sm font-medium mb-2">{post.category}</div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{post.date}</span>
          <Link href={`/pages/blog/${post.slug}`} className="text-teal-600 hover:text-teal-800 font-medium">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get all blog posts
  const allPosts = getAllBlogPosts();
  
  // Get unique categories
  const categories = ['all', ...new Set(allPosts.map(post => post.category))];
  
  // Filter posts by category and search query
  let filteredPosts = activeCategory === 'all' 
    ? allPosts 
    : getBlogPostsByCategory(activeCategory);
    
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Health & Wellness Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover science-backed articles on nutrition, fitness, longevity, and health technology 
          to help you live your healthiest life at any age.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Topics' : category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No articles found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
          >
            View All Articles
          </button>
        </div>
      )}
      
      {/* Newsletter Signup */}
      <div className="mt-16 bg-gray-100 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest health tips, product recommendations, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 flex-grow max-w-md"
            />
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails from HLTHeStore. You can unsubscribe at any time.
          </p>
        </div>
      </div>
      
      {/* Health Quiz CTA */}
      <div className="mt-16 bg-teal-600 text-white rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Find Your Best Health Solution</h2>
            <p className="text-lg mb-6">
              Take our personalized health quiz and discover products tailored to your specific needs and goals.
            </p>
          </div>
          <div>
            <Link href="/health-quiz" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition duration-300">
              Take the Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
