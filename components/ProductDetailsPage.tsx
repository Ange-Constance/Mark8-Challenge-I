"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useGetRecentProductsIdQuery } from "../store/endpoints/productID-endpoint";

const ProductDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;

  const { data, error, isLoading } = useGetRecentProductsIdQuery(id);

  useEffect(() => {
    console.log("Product ID from URL:", id);
    console.log("Fetched Product Data:", data);
  }, [id, data]);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    console.error("Error fetching product:", error);
    return <div>Error loading product</div>;
  }

  const product = data?.data?.products?.find((product) => product.id === id);

  if (!product) {
    console.log("Product not found in fetched data");
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.unitPrice} Rwf</p>
      <img src={product.thumbnail[0]} alt={product.name} />
    </div>
  );
};

export default ProductDetailsPage;
