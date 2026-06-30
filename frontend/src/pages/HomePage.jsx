import React from 'react';
import {NavLink} from "react-router-dom";

const HomePage = () => {
  // Reusable hover class for glassy nav links
  const navLinkClass = "text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300";

  return (
    <div className="min-h-screen bg-black relative flex flex-col font-sans overflow-x-hidden text-gray-100">
      
      {/* Liquid Ambient Background Effects (Fixed so they stay in place on scroll) */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-800/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-[40%] left-[50%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] translate-x-[-50%] pointer-events-none z-0"></div>

      {/* --- Navigation Bar --- */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-black/40 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <span className="text-black font-bold text-lg leading-none pt-0.5">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Shoplift
              </span>
            </div>

            {/* Center Navigation Links (Hidden on mobile for clarity) */}
            <div className="hidden md:flex space-x-2">
              <NavLink to={"/products"} className={navLinkClass}>Products</NavLink>
              <NavLink to={"/admin/login"} className={navLinkClass}>Admin</NavLink>
              <NavLink to={"/login"} className={navLinkClass}>User Login</NavLink>
            </div>

            {/* Right Action Icons (Profile & Cart) */}
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/[0.1] transition-all duration-300 flex items-center gap-2">
                <span className="hidden sm:block text-sm font-medium mr-1">Profile</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </button>
              
              <button className="relative p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/[0.1] transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                {/* Cart Badge */}
                <span className="absolute top-0 right-0 block w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold text-center leading-4 shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  3
                </span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- Main Hero Section --- */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">New Collection Live</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-white mb-2">Redefine your style with</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
              Shoplift.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Experience the future of e-commerce. Seamlessly browse, securely purchase, and step into a world of curated premium products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-2xl text-base font-semibold bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out">
              Start Shopping
            </button>
            <button className="px-8 py-4 rounded-2xl text-base font-medium text-white border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300 ease-in-out">
              Explore Categories
            </button>
          </div>

        </div>

        {/* Decorative Glass Feature Cards below Hero */}
        <div className="w-full max-w-6xl mx-auto mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {[
            { title: "Premium Quality", desc: "Handpicked items ensuring the highest standards." },
            { title: "Fast Delivery", desc: "Global shipping with real-time tracking." },
            { title: "Secure Checkout", desc: "End-to-end encryption for your peace of mind." }
          ].map((feature, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-500 cursor-default">
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="relative z-10 w-full backdrop-blur-xl bg-black/50 border-t border-white/[0.05] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center opacity-80">
              <span className="text-black font-bold text-sm leading-none pt-0.5">S</span>
            </div>
            <span className="text-lg font-semibold text-gray-300 tracking-tight">Shoplift</span>
          </div>
          
          <div className="text-sm text-gray-500 flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-gray-600 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Shoplift Inc. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;