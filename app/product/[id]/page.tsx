"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FiChevronLeft, FiHeart, FiPhone } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { useGetRecentProductsIdQuery } from "../../../store/endpoints/productID-endpoint";

const ProductDetailsPage = () => {
  const params = useParams();
  const id = params?.id;

  const { data, error, isLoading } = useGetRecentProductsIdQuery(String(id));

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (data) {
      console.log("Fetched Product Data:", data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    console.error("Error fetching product:", error);
    return <div>Error loading product: {JSON.stringify(error)}</div>;
  }

  const product = data?.data;

  if (!product) {
    console.log("Product not found for ID:", id);
    return <div>Product not found for the given ID</div>;
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      {/* Header Section */}
      <div className="bg-white text-black px-6 py-4 flex items-center space-x-2">
        <FiChevronLeft
          className="text-[#A4C400] cursor-pointer"
          onClick={() => window.history.back()}
        />
        <nav className="text-sm text-gray-400">
          Home / Products / <span className="text-black">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="flex flex-col justify-between lg:flex-row max-w-full mx-auto my-auto gap-6">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg p-6 flex-1 flex flex-col">
          <img
            src={product.thumbnail[0]}
            alt={product.name}
            className="h-96 bg-gray-200 rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4 px-5">
            <div className="flex flex-row gap-3 items-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  product.stock
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.stock ? "IN STOCK" : "OUT OF STOCK"}
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

          {/* Product Details */}
          <div className="flex flex-col gap-8 py-10 px-5">
            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <div className="text-[#A4C400] text-lg font-semibold mt-2">
                {product.discountPrice
                  ? `${product.discountPrice.toLocaleString()} Rwf`
                  : `${product.unitPrice.toLocaleString()} Rwf`}
                {product.discountPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    {product.unitPrice.toLocaleString()} Rwf
                  </span>
                )}
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-bold">Description</h1>
              <p className="text-sm text-gray-500 mt-4">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-sm font-semibold">Reviews</h3>
              <div className="flex items-center space-x-1 text-[#A4C400] gap-1">
                <AiOutlineStar />
                <span className="font-semibold text-black">
                  {product.reviews.length}
                </span>
                <span className="text-gray-400 text-xs">
                  ({product.reviews.length} Reviews)
                </span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center mt-6 space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={decrementQuantity}
                  className="text-gray-500 border rounded-lg px-4 py-2 hover:bg-gray-200 transition"
                >
                  -
                </button>
                <span className="border rounded-lg px-10 bg-gray-100 py-2">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="text-gray-500 border rounded-lg px-4 py-2 hover:bg-gray-200 transition"
                >
                  +
                </button>
              </div>

              <button className="bg-[#A4C400] text-black font-medium px-6 py-2 rounded-lg flex items-center space-x-2">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Shop Info */}
          <div className="mt-6 border-t pt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-[14px]">Shop Info:</p>
              <span className="text-gray-600 text-sm">{product.shopName}</span>
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

export default ProductDetailsPage;
