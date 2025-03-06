import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/endpoints/cardSlice"; // Adjust the path to your Redux slice
import { toggleProduct } from "../store/endpoints/savedProductsSlice"; // For saving liked products
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa"; // Icon imports

interface Product {
  id: string | number;
  name: string;
  unitPrice: number;
  thumbnail: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Handler to toggle like/unlike the product
  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    // Dispatch action to save the liked product to the saved products list
    dispatch(toggleProduct(product));
  };

  // Handler to add the product to the cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAddedToCart(!isAddedToCart);
    // Dispatch addToCart action with quantity set to 1
    // dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const imageUrl =
    product.thumbnail?.length > 0 ? product.thumbnail[0] : "/product-bg.png";

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full h-[344px] cursor-pointer">
        <div
          className="bg-cover bg-center opacity-80 h-[256px] bg-gray-100 flex items-center justify-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="p-5 h-[88px]">
          <p className="text-gray-800 text-[14px] font-medium">
            {product.name}
          </p>
          <div className="flex flex-row justify-between items-center">
            <p className="text-[#A4C400] text-[16px] font-semibold">
              {product.unitPrice.toLocaleString()} Rwf
            </p>
            <div className="flex items-center gap-2">
              <button onClick={handleLikeClick}>
                {isLiked ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-600" />
                )}
              </button>
              <button
                onClick={handleAddToCart}
                className={isAddedToCart ? "text-green-500" : "text-gray-600"}
              >
                <FaShoppingCart className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
