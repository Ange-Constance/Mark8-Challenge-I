// RecentProduct.tsx
"use client";
import React from "react";
import ProductCard from "./ProductCard";
import StoreCard from "./ShopItem";
import { useGetRecentProductsQuery } from "@/store/endpoints/product-endpoints";
import { useGetTopStoresQuery } from "@/store/endpoints/topstore-endpoints";

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
    <div>
      <h2>Recent Products</h2>
      {!products.length ? (
        <p>No recent products available.</p>
      ) : (
        products.map((product, index) => (
          <ProductCard
            key={product.id || `product-${index}`}
            product={product}
          />
        ))
      )}

      <h2>Top Stores</h2>
      {!stores.length ? (
        <p>No stores available.</p>
      ) : (
        stores.map((store, index) => (
          <StoreCard key={store.id || `store-${index}`} shop={store} />
        ))
      )}
    </div>
  );
};

export default RecentProduct;
