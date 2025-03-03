"use client";
import React from "react";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ProductCardProps {
  product: {
    id: string | number;
    name: string;
    unitPrice: number;
    oldPrice?: number;
    thumbnail: string[];
    isLiked?: boolean;
    handleLikeClick?: () => void;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) {
    return <p>Product data is missing</p>;
  }

  const imageUrl =
    product.thumbnail?.length > 0 ? product.thumbnail[0] : "/product-bg.png";

  return (
    <div className="flex justify-center items-center w-full">
      <Link
        href={`/productdetails/${product.id}`}
        passHref
        className="block w-full"
      >
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full h-[344px] cursor-pointer">
          {/* Dynamic Product Image */}
          <div
            className="bg-cover bg-center opacity-80 h-[256px] bg-gray-100 flex items-center justify-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          {/* Product Details */}
          <div className="p-5 h-[88px]">
            <p className="text-gray-800 text-[14px] font-medium">
              {product.name}
            </p>
            <div className="flex flex-row justify-between items-center">
              {/* Dynamic Price */}
              <div className="flex items-center gap-2">
                <p className="text-[#A4C400] text-[16px] font-semibold">
                  {typeof product.unitPrice === "number"
                    ? `${product.unitPrice.toLocaleString()} Rwf`
                    : "N/A"}
                </p>
                {typeof product.oldPrice === "number" && (
                  <p className="text-gray-400 line-through text-[14px]">
                    {product.oldPrice.toLocaleString()} Rwf
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
                    product.handleLikeClick?.();
                  }}
                  className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition"
                >
                  {product.isLiked ? (
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
