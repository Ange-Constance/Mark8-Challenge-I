'use client';

import React, { useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[310px] h-[344px]">
        {/* Product Image Section */}
        <div className="bg-[url('/product-bg.png')] bg-cover bg-center opacity-80 h-[256px] bg-gray-100 flex items-center justify-center">
          {/* Placeholder for product image */}
          {/* Add your image inside this div if needed */}
        </div>

        {/* Product Info Section */}
        <div className="p-5 h-[88px]">
          {/* Product Name */}
          <p className="text-gray-800 text-[14px] font-medium">Product 1</p>

          {/* Price & Actions Section */}
          <div className="flex flex-row justify-between items-center">
            {/* Price Section */}
            <div className="flex items-center gap-2">
              <p className="text-[#A4C400] text-[16px] font-semibold">9,000 Rwf</p>
              <p className="text-gray-400 line-through text-[14px]">12,000 Rwf</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Add to Cart Button */}
              <button className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
                <RiShoppingCartLine size={18} className="text-gray-600" />
              </button>

              {/* Like Button */}
              <button
                onClick={handleLikeClick}
                className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition"
              >
                {isLiked ? (
                  <FaHeart size={18} className="text-[#A4C400]" />
                ) : (
                  <FaRegHeart size={18} className="text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
