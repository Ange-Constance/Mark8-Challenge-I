"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductCard from "../ProductCard";

const SavedProducts: React.FC = () => {
  const savedProducts = useSelector(
    (state: RootState) => state.savedProducts.savedProducts
  );

  console.log("Saved products:", savedProducts);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Saved Products</h2>
      {savedProducts.length === 0 ? (
        <p>No products saved yet.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {savedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedProducts;
