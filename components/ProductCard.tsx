"use client";

import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price?: number | null; // Optional and can be null
  oldPrice?: number | null; // Optional and can be null
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  oldPrice,
  imageUrl,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex justify-center items-center w-full">
      {/* added temporary link to test */}
      <Link href={`/productdetails`} passHref className="block w-full">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden  w-full h-[344px] cursor-pointer">
          {/* Dynamic Product Image */}

          <div
            className="bg-cover bg-center opacity-80  h-[256px] bg-gray-100 flex items-center justify-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          {/* Product Details */}
          <div className="p-5 h-[88px]">
            <p className="text-gray-800 text-[14px] font-medium">{name}</p>

            <div className="flex flex-row justify-between items-center">
              {/* Dynamic Price */}
              <div className="flex items-center gap-2">
                <p className="text-[#A4C400] text-[16px] font-semibold">
                  {typeof price === "number"
                    ? `${price.toLocaleString()} Rwf`
                    : "N/A"}
                </p>
                {typeof oldPrice === "number" && (
                  <p className="text-gray-400 line-through text-[14px]">
                    {oldPrice.toLocaleString()} Rwf
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
                  <RiShoppingCartLine size={18} className="text-gray-600" />
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation when liking
                    handleLikeClick();
                  }}
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
      </Link>
    </div>
  );
};

export default ProductCard;
