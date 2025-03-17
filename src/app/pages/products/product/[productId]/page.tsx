import { getProductById, generateAffiliateLink, AmazonProduct } from '@/lib/amazon-affiliate';
import Link from 'next/link';

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

// Review component
const Review = ({ 
  author, 
  date, 
  rating, 
  title, 
  content 
}: { 
  author: string; 
  date: string; 
  rating: number; 
  title: string; 
  content: string;
}) => {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6 last:border-0">
      <div className="flex items-center mb-2">
        <StarRating rating={rating} />
        <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
      </div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>By {author}</span>
        <span className="mx-2">•</span>
        <span>{date}</span>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const productId = params.productId;
  const product = getProductById(productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for could not be found.</p>
        <Link href="/pages/products" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium">
          Back to Products
        </Link>
      </div>
    );
  }
  
  const affiliateLink = generateAffiliateLink(product.id);
  
  // Mock reviews for the product
  const reviews = [
    {
      author: "Margaret J.",
      date: "February 15, 2025",
      rating: 5,
      title: "Excellent quality and easy to use",
      content: "I've been using this product for a month now and I'm very impressed with the quality. It's easy to use, even for someone who isn't tech-savvy, and the results are accurate. Highly recommend for anyone looking to monitor their health at home."
    },
    {
      author: "Robert T.",
      date: "January 28, 2025",
      rating: 4,
      title: "Great product with minor issues",
      content: "This product works very well and has helped me keep track of my health metrics. The only reason I'm giving 4 stars instead of 5 is that the app occasionally has connectivity issues. Otherwise, it's a great purchase and good value for money."
    },
    {
      author: "Susan M.",
      date: "January 10, 2025",
      rating: 5,
      title: "Life-changing purchase",
      content: "I can't say enough good things about this product. It has completely changed how I monitor my health and has given me peace of mind. The data is easy to understand and share with my doctor. Worth every penny!"
    }
  ];
  
  // Mock related products
  const relatedProducts: AmazonProduct[] = [
    {
      id: 'B07N124XDS',
      title: 'Smart Blood Pressure Monitor',
      description: 'Wireless, easy-to-use BP monitor with smartphone app.',
      price: '$79.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.7,
      reviewCount: 42,
      category: 'health-monitoring',
      tags: ['Best Seller']
    },
    {
      id: 'B07QZWT21D',
      title: 'Digital Body Weight Scale',
      description: 'Smart scale with body composition analysis and app connectivity.',
      price: '$59.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.2,
      reviewCount: 28,
      category: 'health-monitoring',
      tags: ['New']
    },
    {
      id: 'B08DFPV5Y2',
      title: 'Advanced Fitness Tracker',
      description: 'Track steps, heart rate, sleep, and more with this waterproof wearable.',
      price: '$129.99',
      imageUrl: '/placeholder.jpg',
      rating: 4.8,
      reviewCount: 56,
      category: 'health-monitoring'
    }
  ].filter(p => p.id !== product.id).slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8 text-sm">
        <Link href="/" className="text-gray-500 hover:text-teal-600">Home</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/pages/products" className="text-gray-500 hover:text-teal-600">Products</Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href={`/pages/products/${product.category}`} className="text-gray-500 hover:text-teal-600">
          {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">{product.title}</span>
      </nav>
      
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-1 aspect-h-1 relative h-96">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <StarRating rating={product.rating} />
            <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">{product.reviewCount} reviews</span>
          </div>
          
          {/* Price */}
          <div className="text-2xl font-bold mb-6">{product.price}</div>
          
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
          </div>
          
          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Feature 1: Lorem ipsum dolor sit amet</li>
              <li>Feature 2: Consectetur adipiscing elit</li>
              <li>Feature 3: Sed do eiusmod tempor incididunt</li>
              <li>Feature 4: Ut labore et dolore magna aliqua</li>
              <li>Feature 5: Ut enim ad minim veniam</li>
            </ul>
          </div>
          
          {/* CTA Button */}
          <div className="mb-8">
            <a 
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center px-6 py-4 rounded-lg font-medium text-lg transition duration-300"
            >
              View on Amazon
            </a>
            <p className="text-sm text-gray-500 mt-2 text-center">
              *As an Amazon Associate we earn from qualifying purchases.
            </p>
          </div>
          
          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
              <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-8">
          <div className="flex overflow-x-auto">
            <button className="px-6 py-3 border-b-2 border-teal-600 text-teal-600 font-medium">
              Reviews
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              Specifications
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              FAQ
            </button>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded font-medium transition duration-300">
              Write a Review
            </button>
          </div>
          
          {/* Review Summary */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 text-center mb-6 md:mb-0">
                <div className="text-5xl font-bold text-gray-800 mb-2">{product.rating.toFixed(1)}</div>
                <StarRating rating={product.rating} />
                <div className="text-gray-600 mt-2">{product.reviewCount} reviews</div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm w-12">5 stars</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">70%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm w-12">4 stars</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">20%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm w-12">3 stars</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: '5%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">5%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm w-12">2 stars</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: '3%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">3%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm w-12">1 star</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: '2%' }}></div>
                    </div>
                    <span className="text-sm w-12 text-right">2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Individual Reviews */}
          <div className="space-y-0">
            {reviews.map((review, index) => (
              <Review 
                key={index}
                author={review.author}
                date={review.date}
                rating={review.rating}
                title={review.title}
                content={review.content}
              />
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition duration-300">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="aspect-w-1 aspect-h-1 relative h-64">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{relatedProduct.title}</h3>
                <div className="flex items-center mb-2">
                  <StarRating rating={relatedProduct.rating} />
                  <span className="text-gray-500 text-sm ml-1">({relatedProduct.reviewCount})</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">{relatedProduct.price}</span>
                  <Link 
                    href={`/pages/products/product/${relatedProduct.id}`}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded font-medium transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
