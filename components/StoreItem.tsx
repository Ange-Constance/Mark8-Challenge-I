// components/StoreItem.tsx
import React from "react";
import { FaPhone, FaRegHeart, FaUser } from "react-icons/fa";

interface Store {
  id: string;
  name: string;
  address: string;
  description: string;
  image?: string;
}

interface StoreItemProps {
  store: Store;
}

const StoreItem: React.FC<StoreItemProps> = ({ store }) => {
  const imageUrl = store.image || "@product-bg.png"; // Default image

  return (
    <div className="border border-[#DBDBDB] rounded-2xl mb-11">
      <div className="flex flex-row justify-between items-center px-10 py-5 border-b-2 border-[#DBDBDB]">
        <div className="flex flex-row items-center gap-5 w-[327px] h-[60px] px-5">
          <img
            src={imageUrl}
            alt={store.name}
            className="h-[60px] w-[60px] rounded-2xl bg-[#C1CF16] opacity-80"
          />
          <div>
            <h1 className="text-[14px] font-semibold mb-2">{store.name}</h1>
            <p className="text-[12px]">{store.address} </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <button className="flex items-center gap-3 bg-[#C1CF16] px-8 py-2 rounded-lg h-[48px]">
            <FaUser size={16} />
            <span className="font-semibold text-[14px]">View Profile</span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100">
            <FaPhone size={18} className="text-gray-600" />
          </button>
          <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100">
            <FaRegHeart size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-[16px] mb-4">About</h1>
          <p className="text-[#495D69] font-light w-[350px]">
            {store.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
