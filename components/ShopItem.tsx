import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export const ShopItem = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-[60px] px-5 mb-5">
      <div className="flex flex-row justify-between items-center gap-5">
        <div>
          {/* Image side */}
          <img
            src="product-bg.png"
            alt=""
            className="h-[60px] w-[60px] rounded-2xl bg-[#C1CF16] opacity-80"
          />
        </div>

        <div className="">
          <h1 className="text-[14px] font-semibold mb-2">Awesome Shop 3</h1>
          <p className="text-[12px]">134 Products</p>
        </div>
      </div>
      <div>
        <button>
          <AiOutlineRight size={16} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};
