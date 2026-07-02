import React, { useState , useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createReview, getProduct } from '../utils/api';

const ProductViewPage = () => {
  // Mock product details (In production, replace this with data fetched using useParams)
  const {productId} = useParams();

  const [product, setProduct] = useState(null);

  useEffect(()=>{
    console.log(productId)
    const loadData = async ()=>{
      try {
        const data = await getProduct(productId);
        setProduct(data);
        setReviews(data.review)
      } 
      catch (error) {
        console.error(error);
        console.log("Failed to load product data")
      }

    }
    loadData();
  },[productId]);

  // Mock initial reviews state
  const [reviews, setReviews] = useState([]);

  // Review Form States
  const [reviewerName, setReviewerName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");

  // Submit Handler for new review
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewComment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: reviewerName,
      rating: Number(reviewRating),
      comment: reviewComment,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };

    setReviews([newReview, ...reviews]);
    setReviewerName("");
    setReviewComment("");
    setReviewRating(5);
  };

  if(!product){
    return(
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="min-h-screen bg-black relative flex flex-col font-sans overflow-x-hidden text-gray-100">
      
      {/* Liquid Ambient Background Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* --- Global Navigation --- */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-black/40 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <span className="text-black font-bold text-lg leading-none pt-0.5">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Shoplift
              </span>
            </Link>
            <div className="hidden md:flex space-x-2">
              <Link to="/products" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300">Products</Link>
              <Link to="/admin/login" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300">Admin</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Layout Container --- */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-16">
        
        {/* --- Section 1: Product Core View --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Media Display Column */}
          <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-4 overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <span className="absolute top-4 right-4 backdrop-blur-md bg-black/60 text-sm px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1">
                ⭐ {product.rating}
              </span>
            </div>
          </div>

          {/* Product Summary Column */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-2">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
                {product.name}
              </h1>
              <p className="text-3xl font-extrabold text-white tracking-tight">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            </div>

            <p className="text-gray-400 font-light leading-relaxed">
              {product.description}
            </p>
            {/* --- Premium Warranty & Trust Badge Card --- */}
            <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                  {/* Shield Icon */}
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">{product.warranty}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">100% coverage against manufacturing defects with zero hassle.</p>
                </div>
              </div>
            </div>
            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                  {product.provider.name}
                </div>
            </div>

            <div className="pt-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                Add to Shopping Bag
              </button>
            </div>
          </div>
        </div>

        <hr className="border-white/[0.05]" />

        {/* --- Section 2: Review Section Wrapper --- */}
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Customer Feedbacks</h2>
            <p className="text-sm text-gray-400 mt-1">Share your experience or look at what others think.</p>
          </div>

          {/* --- TOP BOX: Review Submission Form --- */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-4">Write a Review</h3>
            
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Reviewer Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Rahul K."
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 placeholder-gray-600 transition-colors"
                  />
                </div>

                {/* Rating Selection dropdown */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Rating</label>
                  <select 
                    value={reviewRating}
                    onChange={(e) => setReviewRating(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5 / 5)</option>
                    <option value="4">⭐⭐⭐⭐ (4 / 5)</option>
                    <option value="3">⭐⭐⭐ (3 / 5)</option>
                    <option value="2">⭐⭐ (2 / 5)</option>
                    <option value="1">⭐ (1 / 5)</option>
                  </select>
                </div>
              </div>

              {/* Review Comment Box */}
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Your Feedback</label>
                <textarea 
                  rows="4"
                  required
                  placeholder="What did you like or dislike about this product?"
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 placeholder-gray-600 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Action */}
              <div className="flex justify-end">
                <button 
                  onClick={()=>{createReview({reviewComment:reviewComment,reviewRating:reviewRating,reviewerName:reviewerName,_id:productId})}}
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs font-semibold bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                >
                  Publish Review
                </button>
              </div>
            </form>
          </div>

          {/* --- Bottom Feed: List of Reviews --- */}
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <p className="text-center text-gray-500 font-light py-6">No reviews yet. Be the first to add one above!</p>
            ) : (
              reviews.map((rev) => (
                <div 
                  key={rev._id} 
                  className="backdrop-blur-xl bg-white/[0.01] border border-white/[0.05] rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                    <div>
                      <h4 className="text-sm font-semibold text-white">{rev.name}</h4>
                      <div className="text-yellow-400 text-xs mt-0.5">
                        {"⭐".repeat(rev.rating)}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 font-light">{rev.createdAt}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {rev.comment}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

      </main>

      {/* --- Universal Footer --- */}
      <footer className="relative z-10 w-full backdrop-blur-xl bg-black/50 border-t border-white/[0.05] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-400 tracking-tight">Shoplift</span>
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Shoplift Inc. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ProductViewPage;