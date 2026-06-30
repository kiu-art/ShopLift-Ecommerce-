import React, { useState } from 'react';
import { Link } from "react-router-dom";

const SearchPage = () => {
  // Sample Data matching the "Premium Quality" theme
  const initialProducts = [
    { id: 1, name: "Chronograph Minimalist Watch", category: "Accessories", price: 249, rating: 4.8, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Studio ANC Headphones", category: "Electronics", price: 399, rating: 4.9, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Premium Leather Backpack", category: "Bags", price: 180, rating: 4.7, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Sleek Aluminum Desk Lamp", category: "Home", price: 85, rating: 4.5, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "Matte Black Water Flask", category: "Accessories", price: 45, rating: 4.6, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Ergonomic Wireless Mouse", category: "Electronics", price: 120, rating: 4.8, img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60" },
  ];

  // States for search and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const categories = ["All", "Electronics", "Accessories", "Bags", "Home"];

  // Filter & Sort Logic
  const filteredProducts = initialProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // "featured" defaults to layout order
    });

  return (
    <div className="min-h-screen bg-black relative flex flex-col font-sans overflow-x-hidden text-gray-100">
      
      {/* Liquid Ambient Background Effects */}
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* --- Global Sticky Navigation --- */}
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
              <Link to="/products" className="text-sm font-medium text-white px-3 py-2 rounded-lg bg-white/[0.05]">Products</Link>
              <Link to="/admin/login" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300">Admin</Link>
              <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300">User Login</Link>
            </div>
            <div className="flex items-center space-x-3">
              <button className="relative p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/[0.1] transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span className="absolute top-0 right-0 block w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold text-center leading-4">3</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Content Wrapper --- */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
        {/* Header Title & Dynamic Search Bar */}
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-4">Explore Products</h1>
          <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden focus-within:border-white/30 transition-all duration-300">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input 
              type="text"
              placeholder="Search premium products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
            />
          </div>
        </div>

        {/* Layout Grid: Sidebar Filters + Main Product Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* --- Left Sidebar: Filters --- */}
          <aside className="lg:sticky lg:top-28 backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Categories</h3>
              <div className="flex flex-row flex-wrap lg:flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-left text-sm rounded-xl transition-all duration-200 w-auto lg:w-full ${
                      selectedCategory === cat 
                        ? "bg-white text-black font-semibold" 
                        : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-white/[0.05]" />

            {/* Dynamic Sort Controls */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3">Sort By</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-white/30 transition-colors"
              >
                <option value="featured">Featured Items</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </aside>

          {/* --- Right Main Panel: Product Display Grid --- */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-400">
                Showing <span className="text-white font-medium">{filteredProducts.length}</span> results
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="backdrop-blur-md bg-white/[0.01] border border-dashed border-white/10 rounded-3xl py-24 text-center">
                <p className="text-gray-400 text-lg font-light">No premium products match your current filters.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-4 text-sm text-white underline hover:text-gray-300"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="group relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
                  >
                    {/* Visual Media Container */}
                    <div className="aspect-square w-full bg-neutral-900 overflow-hidden relative">
                      <img 
                        src={product.img} 
                        alt={product.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <span className="absolute top-3 right-3 backdrop-blur-md bg-black/60 text-xs px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 text-gray-200">
                        ⭐ {product.rating}
                      </span>
                    </div>

                    {/* Product Details Area */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div className="mb-4">
                        <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest block mb-1">
                          {product.category}
                        </span>
                        <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-gray-200 line-clamp-1">
                          {product.name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-2">
                        <span className="text-xl font-bold text-white">${product.price}</span>
                        <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>

      {/* --- Universal Footer Section --- */}
      <footer className="relative z-10 w-full backdrop-blur-xl bg-black/50 border-t border-white/[0.05] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center opacity-80">
              <span className="text-black font-bold text-sm leading-none pt-0.5">S</span>
            </div>
            <span className="text-lg font-semibold text-gray-300 tracking-tight">Shoplift</span>
          </div>
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Shoplift Inc. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default SearchPage;