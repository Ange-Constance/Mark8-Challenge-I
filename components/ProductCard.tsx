// ProductCard.tsx
"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleProduct } from "../store/endpoints/savedProductsSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Product {
  id: string | number;
  name: string;
  unitPrice: number;
  thumbnail: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    dispatch(toggleProduct(product));
  };

  const imageUrl =
    product.thumbnail?.length > 0 ? product.thumbnail[0] : "/product-bg.png";

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full h-[344px] cursor-pointer">
        <div
          className="bg-cover bg-center opacity-80 h-[256px] bg-gray-100 flex items-center justify-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="p-5 h-[88px]">
          <p className="text-gray-800 text-[14px] font-medium">
            {product.name}
          </p>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[#A4C400] text-[16px] font-semibold">
              {product.unitPrice.toLocaleString()} Rwf
            </p>
            <button onClick={handleLikeClick}>
              {isLiked ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
