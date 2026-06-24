import React, { useState } from 'react';
import { adminLogin } from '../../utils/api';
import { Link } from 'react-router-dom';

const AdminLoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Payload ready to be authenticated with your Express backend
    console.log("Login Payload:", credentials);
    adminLogin(credentials);
  };

  // Reusable input style class matching the Register page
  const inputClass = "w-full bg-white/[0.03] border border-white/10 text-gray-100 placeholder-gray-500 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 focus:bg-white/[0.06] transition-all duration-300 ease-in-out";

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Liquid Ambient Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-slate-800/40 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Glassmorphism Container */}
      <div className="relative w-full max-w-md backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-3xl p-8 sm:p-10 z-10">
        
        <div className="mb-10 text-center">
          <div className="w-12 h-12 bg-white/[0.05] border border-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-inner">
            {/* Minimalist Lock Icon */}
            <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Welcome Admin,</h2>
          <p className="text-gray-400 text-sm">Sign in to continue to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-5">
            <div>
              <label className="sr-only">Email</label>
              <input 
                type="email" 
                name="email" 
                value={credentials.email} 
                onChange={handleChange} 
                placeholder="Email Address" 
                required 
                className={inputClass} 
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1 px-1">
                <label className="sr-only">Password</label>
                {/* Keeps layout structured, but visually hidden label. Forgot password pushed to right. */}
                <span className="hidden">Password</span>
              </div>
              <input 
                type="password" 
                name="password" 
                value={credentials.password} 
                onChange={handleChange} 
                placeholder="Password" 
                required 
                className={inputClass} 
              />
               <div className="text-right mt-2">
                 <button className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
                    <Link to={"/login"}>
                        User?
                    </Link>
                </button>
              </div>
            </div>
          </div>

          {/* --- Action Button --- */}
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full py-3 rounded-xl text-sm font-semibold bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
            >
              Sign In
            </button>
          </div>

        </form>

        {/* --- Footer Link --- */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to={"/admin/register"} className="text-white font-medium hover:underline hover:text-gray-200 transition-colors">
            Sign Up as Admin
          </Link>
        </p>

      </div>
    </div>
  );
};

export default AdminLoginPage;