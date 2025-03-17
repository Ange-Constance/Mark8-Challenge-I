"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useGetRecentProductsIdQuery } from "../store/endpoints/productID-endpoint";

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log("Product ID from URL:", id);
  }, [id]);

  // Fetch product data based on id
  const { data, error, isLoading } = useGetRecentProductsIdQuery(id as string);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  const product = data?.data?.products?.find((product) => product.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.unitPrice} Rwf</p>
      <img src={product.thumbnail[0]} alt={product.name} />
    </div>
  );
};

export default ProductDetailsPage;
