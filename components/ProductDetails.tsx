'use client';

import { FiChevronLeft, FiHeart, FiPhone } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import React, { useState } from 'react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      {/* Header */}
      <div className="bg-white text-black px-6 py-4 flex items-center space-x-2">
        <FiChevronLeft className="text-[#A4C400]" />
        <nav className="text-sm text-gray-400">
          Home / Products / Vectors / <span className="text-black">Product 1</span>
        </nav>
      </div>

      <div className="flex flex-col justify-between lg:flex-row max-w-full mx-auto my-10 gap-6">
        {/* Left Section: Product Image */}
        <div className="bg-gray-100 rounded-lg p-6 flex-1 flex flex-col">
          <div className="h-96 bg-gray-200 rounded-lg"></div>
          <div className="mt-4 flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className={`w-16 h-16 bg-gray-200 rounded-lg ${
                  index === 0 ? 'border-2 border-[#A4C400]' : ''
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4 px-5">
            <div className="flex flex-row gap-3 items-center">
              <h2 className="text-lg font-semibold">Product Details</h2>
              <span className="text-xs bg-gray-100 text-black font-medium px-3 py-1 rounded-full">
                IN STOCK
              </span>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <button className="flex items-center space-x-2 border border-gray-300 bg-white text-black px-4 py-2 rounded-lg hover:shadow-md">
                <FiHeart className="text-[#A4C400]" />
                <span className="text-[14px] font-semibold">Save</span>
              </button>

              <div className="text-gray-600">
                <BiDotsVerticalRounded size={24} />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-8 py-10 px-5">
            <div>
              <h1 className="text-2xl font-bold">Product 5</h1>
              <div className="text-[#A4C400] text-lg font-semibold mt-2">
                9,000 Rwf{' '}
                <span className="line-through text-gray-400 text-sm">12,000 Rwf</span>
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-bold">Description</h1>
              <p className="text-sm text-gray-500 mt-4">
                A cozy boutique offering a curated selection of unique, high-quality clothing
                and accessories for fashion-forward individuals.
              </p>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-sm font-semibold">Reviews</h3>
              <div className="flex items-center space-x-1 text-[#A4C400] gap-1">
                <AiOutlineStar />
                <span className="font-semibold text-black">4.9</span>
                <span className="text-gray-400 text-xs">(14 Reviews)</span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center mt-6 space-x-4">
              {/* Quantity Control */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={decrementQuantity}
                  className="text-gray-500 border rounded-lg px-4 py-2 hover:bg-gray-200 transition"
                >
                  -
                </button>
                <span className="border rounded-lg px-10 bg-gray-100 py-2">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="text-gray-500 border rounded-lg px-4 py-2 hover:bg-gray-200 transition"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-[#A4C400] text-black font-medium px-6 py-2 rounded-lg flex items-center space-x-2">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 border-t pt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-[14px]">Shop Info:</p>
              <div className="bg-[#A4C400] w-10 h-10 flex items-center justify-center rounded-full"></div>
              <span className="text-gray-600 text-sm">Awesome Shop 1</span>
            </div>
            <button className="flex items-center space-x-2 text-black border rounded-lg px-5 bg-gray-100 py-3 text-[14px] font-medium">
              <FiPhone className="text-[#A4C400]" />
              <span>Contact Store</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
