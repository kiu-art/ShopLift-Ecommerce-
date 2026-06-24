import React, { useState } from 'react';
import { register } from '../utils/api';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    phoneNo: '',
    address: {
      street: '',
      city: '',
      state: '',
      pinCode: '',
      country: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Payload ready to be sent to your Express backend
    console.log("Registration Payload:", formData);
    register(formData);
  };

  // Reusable input style class for the "Apple Glass" look
  const inputClass = "w-full bg-white/[0.03] border border-white/10 text-gray-100 placeholder-gray-500 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 focus:bg-white/[0.06] transition-all duration-300 ease-in-out";

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans">
      
      {/* Liquid Ambient Background Effects */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-slate-800/40 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Glassmorphism Container */}
      <div className="relative w-full max-w-4xl backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-3xl p-8 sm:p-12 z-10">
        
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-2">Create Account</h2>
          <p className="text-gray-400 text-sm">Join us to experience the next generation of e-commerce.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* --- Personal Information Section --- */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="sr-only">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className={inputClass} />
              </div>
              <div>
                <label className="sr-only">Username</label>
                <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Username" required className={inputClass} />
              </div>
              <div>
                <label className="sr-only">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className={inputClass} />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className={inputClass} />
              </div>
              <div>
                <label className="sr-only">Date of Birth</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className={`${inputClass} [color-scheme:dark]`} />
              </div>
              <div>
                <label className="sr-only">Phone Number</label>
                <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Phone Number" required className={inputClass} />
              </div>
            </div>
          </div>

          {/* --- Address Section --- */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Address Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="sr-only">Street</label>
                <input type="text" name="street" value={formData.address.street} onChange={handleAddressChange} placeholder="Street Address" required className={inputClass} />
              </div>
              <div>
                <label className="sr-only">City</label>
                <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} placeholder="City" required className={inputClass} />
              </div>
              <div>
                <label className="sr-only">State</label>
                <input type="text" name="state" value={formData.address.state} onChange={handleAddressChange} placeholder="State / Province" required className={inputClass} />
              </div>
              <div>
                <label className="sr-only">Pin Code</label>
                <input type="number" name="pinCode" value={formData.address.pinCode} onChange={handleAddressChange} placeholder="Postal / Pin Code" required className={inputClass} />
              </div>
              <div>
                <label className="sr-only">Country</label>
                <input type="text" name="country" value={formData.address.country} onChange={handleAddressChange} placeholder="Country" required className={inputClass} />
              </div>
            </div>
          </div>

          {/* --- Action Buttons --- */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-end">
            <button type="button" className="px-6 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors duration-200">
              <Link to={"/login"}>
                Sign In
              </Link>
            </button>
            <button type="submit" className="px-8 py-3 rounded-xl text-sm font-semibold bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out">
              Register Account
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;