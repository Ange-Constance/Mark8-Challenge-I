// RecentProduct.tsx
"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useGetRecentProductsQuery } from "@/store/endpoints/product-endpoints";

const RecentProduct = () => {
  const { data, isLoading, isError, error } = useGetRecentProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error loading products: {error?.toString()}</p>;

  const products = data?.data.products || [];

  return (
    <div>
      {!products.length ? (
        <p>No recent products available.</p>
      ) : (
        products.map((product, index) => {
          console.log("Rendering product with id:", product.id);
          return (
            <ProductCard
              key={product.id || `product-${index}`}
              product={product}
            />
          );
        })
      )}
    </div>
  );
};

export default RecentProduct;
