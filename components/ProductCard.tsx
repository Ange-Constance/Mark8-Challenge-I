// ProductCard.tsx
import React from "react";

interface ProductCardProps {
  product: {
    id: string | number;
    name: string;
    description: string;
    unitPrice: number;
    thumbnail: string[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) {
    return <p>Product data is missing</p>;
  }

  // Use the first image from the thumbnail array (if available)
  const imageUrl =
    product.thumbnail?.length > 0 ? product.thumbnail[1] : "/product-bg.png";

  return (
    <div key={product.id} className="border p-4 rounded-lg">
      <img
        src={imageUrl}
        alt={product.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="mt-2 font-bold">{product.name}</h3>
      <p className="text-gray-500">${product.unitPrice}</p>
    </div>
  );
};

export default ProductCard;
