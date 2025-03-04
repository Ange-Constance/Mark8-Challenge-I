// RecentProduct.tsx
"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import StoreCard from "./ShopItem";
import { useGetRecentProductsQuery } from "@/store/endpoints/product-endpoints";
import { useGetTopStoresQuery } from "@/store/endpoints/topstore-endpoints";
import { HiOutlineFilter, HiAdjustments } from "react-icons/hi";
import { FaRegUser, FaStore, FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { OpenStore } from "./OpenStore";

const RecentProduct = () => {
  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
    error: productError,
  } = useGetRecentProductsQuery();
  const {
    data: storeData,
    isLoading: isStoreLoading,
    isError: isStoreError,
    error: storeError,
  } = useGetTopStoresQuery();

  const [savedProducts, setSavedProducts] = useState<any[]>([]);

  const handleSaveProduct = (product: any) => {
    setSavedProducts((prev) => {
      if (!product.id) return prev;
      if (prev.find((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  console.log("Store Data:", storeData);

  if (isProductLoading || isStoreLoading)
    return <p>Loading products and stores...</p>;
  if (isProductError)
    return <p>Error loading products: {productError?.toString()}</p>;
  if (isStoreError)
    return <p>Error loading stores: {storeError?.toString()}</p>;

  const products = productData?.data.products || [];
  const stores = storeData?.data.stores || [];

  return (
    <div className="mx-20 max-w-full">
      <div className="flex items-center justify-between w-full h-[64px] bg-white rounded-lg p-4">
        <div className="flex items-center gap-2">
          <div className="w-[24px] h-[24px] flex items-center justify-center rounded-md">
            <HiOutlineFilter size={16} className="text-[#D4FA24]" />
          </div>
          <span className="text-black font-semibold text-sm">
            Recent Products ({products.length})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-[36px] h-[36px] border-2 border-gray-300 rounded-md">
            <HiOutlineFilter size={16} className="text-black" />
          </div>
          <div className="flex items-center justify-center w-[36px] h-[36px] border-2 border-gray-300 rounded-md">
            <FaRegUser size={16} className="text-black" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mb-10 w-full gap-10">
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSave={handleSaveProduct}
                />
              ))
            ) : (
              <p>No recent products available.</p>
            )}
          </div>
          <button className="flex flex-row justify-center gap-3 px-8 py-2 items-center border border-gray-300 rounded-lg w-[161px] h-[48px] whitespace-nowrap">
            <AiOutlineDown size={16} className="text-[#D4FA24]" />
            <span className="font-semibold text-[14px]">Load More</span>
          </button>
        </div>

        <div className="border border-gray-300 w-full lg:w-1/4 rounded-2xl h-auto">
          <div className="flex items-center justify-between w-full h-[64px] p-5">
            <div className="flex items-center gap-5">
              <FaStore className="text-[#D4FA24] text-lg" />
              <span className="text-sm font-semibold text-black">
                Top 10 Stores
              </span>
            </div>
            <FiEdit2 className="text-gray-400 cursor-pointer hover:text-gray-700" />
          </div>
          <div className="justify-between px-5 bg-[#F7F8FB] w-full h-[88px] py-5 mb-5">
            <div className="flex items-center justify-between w-full h-[48px] px-4 bg-white border border-gray-300 rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                <FaSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search a store"
                  className="w-full text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="flex items-center">
                <HiAdjustments className="text-gray-500" />
              </div>
            </div>
          </div>
          <div>
            {stores.length > 0 ? (
              stores.map((store) => <StoreCard key={store.id} shop={store} />)
            ) : (
              <p>No stores available.</p>
            )}
          </div>
        </div>
      </div>
      <OpenStore />
    </div>
  );
};

export default RecentProduct;
