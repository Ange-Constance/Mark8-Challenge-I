import React from "react";
import { FaRegHeart } from "react-icons/fa";

interface Product {
  id: string | number;
  name: string;
  unitPrice: number;
  oldPrice?: number;
  thumbnail: string;
}

interface SingleProductItemProps {
  product: Product;
}

const SingleProductItem: React.FC<SingleProductItemProps> = ({ product }) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full h-auto">
        <div
          className="bg-cover bg-center opacity-80 h-[256px] bg-gray-100 flex items-center justify-center"
          style={{
            backgroundImage: `url(${product.thumbnail || "/product-bg.png"})`,
          }}
        ></div>

        <div className="p-5 h-[88px]">
          <p className="text-gray-800 text-[14px] font-medium">
            {product.name}
          </p>

          <div className="flex flex-row justify-between gap-5">
            <div className="flex items-center">
              <p className="text-[#A4C400] text-[16px] font-semibold">
                {product.unitPrice} Rwf
              </p>
              {product.oldPrice && (
                <p className="text-gray-400 line-through text-[14px]">
                  {product.oldPrice} Rwf
                </p>
              )}
            </div>

            <button className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
              <FaRegHeart size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductItem;
