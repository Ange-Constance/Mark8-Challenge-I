"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductCard from "../ProductCard";
import Navbar from "../Navbar";
import Footer from "../Footer";

const SavedProducts: React.FC = () => {
  const savedProducts = useSelector(
    (state: RootState) => state.savedProducts.savedProducts
  );

  console.log("Saved products:", savedProducts);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          {/* Header Section */}
          <h2 className="text-3xl font-semibold text-black mb-6">
            Saved Products
          </h2>

          {/* Conditional Rendering for Saved Products */}
          {savedProducts.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-lg text-gray-500">No products saved yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {savedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedProducts;
