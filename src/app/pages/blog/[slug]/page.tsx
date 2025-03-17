import { getBlogPostBySlug, getProductById } from '@/lib/blog';
import Link from 'next/link';
import { generateAffiliateLink } from '@/lib/amazon-affiliate';

// Related product card component
const RelatedProductCard = ({ productId }: { productId: string }) => {
  const product = getProductById(productId);
  
  if (!product) return null;
  
  const affiliateLink = generateAffiliateLink(product.id);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="aspect-w-1 aspect-h-1 relative h-48">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
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
          <span className="text-gray-500 text-sm ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">{product.price}</span>
          <a 
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-8">The article you're looking for could not be found.</p>
        <Link href="/pages/blog" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium">
          Back to Blog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8 text-sm">
        <Link href="/" className="text-gray-500 hover:text-teal-600">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/pages/blog" className="text-gray-500 hover:text-teal-600">Blog</Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Article Header */}
          <div className="mb-8">
            <div className="text-teal-600 text-sm font-medium mb-2">{post.category}</div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            {/* Author and Date */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-gray-500 text-sm">{post.date}</div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="aspect-w-16 aspect-h-9 relative h-96 mb-8">
              <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Featured Image</span>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          
          {/* Tags */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link 
                  key={index} 
                  href={`/pages/blog?tag=${tag}`}
                  className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h3 className="font-bold text-lg">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.bio}</p>
              </div>
            </div>
          </div>
          
          {/* Share Buttons */}
          <div className="mb-12">
            <h3 className="font-bold text-lg mb-4">Share This Article</h3>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </button>
              <button className="bg-blue-400 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </button>
              <button className="bg-green-600 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </button>
              <button className="bg-red-600 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0a12 12 0 00-3.8 23.4c-.1-1.1-.2-2.7.1-3.9.3-1.1 1.7-7.1 1.7-7.1s-.4-.8-.4-2.1c0-2 1.2-3.5 2.6-3.5 1.2 0 1.8.9 1.8 2 0 1.2-.8 3-1.2 4.7-.3 1.4.7 2.5 2.1 2.5 2.5 0 4.4-2.6 4.4-6.4 0-3.3-2.4-5.7-5.8-5.7-4 0-6.3 3-6.3 6.1 0 1.2.5 2.5 1.1 3.2.1.1.1.3.1.4-.1.5-.4 1.5-.4 1.7-.1.2-.2.3-.4.2-1.6-.8-2.6-3.1-2.6-5 0-4.1 3-7.9 8.6-7.9 4.5 0 8 3.2 8 7.5 0 4.5-2.8 8.1-6.7 8.1-1.3 0-2.6-.7-3-1.5 0 0-.7 2.5-.8 3.1-.3 1.1-1.1 2.5-1.6 3.4 1.2.4 2.5.6 3.8.6 5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"></path>
                </svg>
              </button>
              <button className="bg-gray-600 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/3">
          {/* Related Products */}
          {post.relatedProducts && post.relatedProducts.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl mb-6">Related Products</h3>
              <div className="space-y-6">
                {post.relatedProducts.map((productId) => (
                  <RelatedProductCard key={productId} productId={productId} />
                ))}
              </div>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-xl mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Get the latest health tips and product recommendations delivered to your inbox.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Popular Tags */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-xl mb-4">Popular Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['Nutrition', 'Fitness', 'Joint Health', 'Recovery', 'Supplements', 'Healthy Aging', 'Technology'].map((tag) => (
                <Link 
                  key={tag} 
                  href={`/pages/blog?tag=${tag}`}
                  className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Health Quiz CTA */}
          <div className="bg-teal-600 text-white rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Find Your Best Health Solution</h3>
            <p className="mb-4">
              Take our personalized health quiz and discover products tailored to your specific needs.
            </p>
            <Link href="/health-quiz" className="block w-full bg-white text-teal-600 text-center px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              Take the Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
