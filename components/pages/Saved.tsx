import React from "react";
import ProductCard from "../ProductCard";
import { OpenStore } from "../OpenStore";

const Saved = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 9000,
      oldPrice: 12000,
      imageUrl: "/product-bg.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15000,
      oldPrice: 18000,
      imageUrl: "/product-bg.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: 10000,
      imageUrl: "/product-bg.png", // No oldPrice
    },
    {
      id: 4,
      name: "Product 4",
      price: 10000,
      imageUrl: "/product-bg.png", // No oldPrice
    },
    {
      id: 5,
      name: "Product 5",
      price: 9000,
      oldPrice: 12000,
      imageUrl: "/product-bg.png",
    },
    {
      id: 6,
      name: "Product 6",
      price: 15000,
      oldPrice: 18000,
      imageUrl: "/product-bg.png",
    },
    {
      id: 7,
      name: "Product 7",
      price: 10000,
      imageUrl: "/product-bg.png", // No oldPrice
    },
    {
      id: 8,
      name: "Product 8",
      price: 10000,
      imageUrl: "/product-bg.png", // No oldPrice
    },
  ];

  return (
    <div className="mx-20">
      <div className="bg-gray-100 rounded-2xl mt-10 mb-20">
        <div className="flex flex-col items-center justify-center bg-[url('/product-bg.png')]  bg-cover bg-opacity-10 bg-center   text-black p-12  w-[1,568px] h-[262px] mx-20 mt[108px] mb-10">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-6">Saved Products</h1>
            <p className="text-gray-400">4 saved</p>
          </div>
        </div>
      </div>

      <div className="w-full mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-10">
          {products.map((products) => (
            <ProductCard
              key={products.id}
              id={products.id}
              name={products.name}
              price={products.price}
              oldPrice={products.oldPrice}
              imageUrl={products.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="mb-20">
        <OpenStore />
      </div>
    </div>
  );
};

export default Saved;
