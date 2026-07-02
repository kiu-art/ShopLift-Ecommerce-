import React, { useState } from 'react';
import { adminDeleteProduct } from '../utils/api';

function ProductCard({
  image,
  name,
  description,
  price,
  _id,
  showDelete = false,
  onClick = () => {}
}) {
  const [hidden, setHidden] = useState(false);

  const onDelete = (e) => {
    // Prevent trigger of onClick if clicking delete
    e.stopPropagation(); 
    setHidden(true);
    adminDeleteProduct(_id);
  };

  if (hidden) return null;

  return (
    <div className="p-4 flex justify-center">
      <div className="group w-[300px] backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between shadow-xl">
        
        {/* Product Media Container */}
        <div className="aspect-square w-full bg-neutral-900 overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        {/* Product Details Area */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white tracking-tight line-clamp-1 mb-2">
              {name}
            </h2>
            <p className="text-sm text-gray-400 line-clamp-2 font-light">
              {description}
            </p>
          </div>

          <div className="space-y-4 mt-auto pt-2">
            {/* Price Display */}
            <p className="text-2xl font-bold text-white tracking-tight">
              ₹{price}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClick}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                View
              </button>

              {showDelete && (
                <button
                  onClick={onDelete}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium bg-red-950/40 text-red-400 border border-red-900/30 hover:bg-red-900/50 hover:text-red-300 transition-colors duration-300"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;