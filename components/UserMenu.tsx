"use client";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiFillShop, AiOutlineUser, AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import Profile from "./Profile";
import MyCart from "./MyCart";

const UserMenu: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const [isPopupVisibl, setIsPopupVisibl] = useState(false);

  const togglePopup2 = () => {
    setIsPopupVisibl(!isPopupVisibl);
  };

  return (
    <div className="flex items-center gap-4">
      <Link href="/dashboard/saved" className="flex items-center gap-2">
        <FaRegHeart size={16} className="cursor-pointer hover:text-gray-900" />
        <span className="text-[12px]">Saved</span>
      </Link>

      <button onClick={togglePopup2} className="flex items-center gap-2">
        <RiShoppingCartLine
          size={16}
          className="cursor-pointer hover:text-red-500"
        />

        <span className="text-[12px]">My Cart</span>
      </button>

      {isPopupVisibl && (
        <div className="absolute top-14 right-0 bg-white rounded-2xl shadow-lg  border-gray-300  z-50">
          <MyCart />
        </div>
      )}

      <button className="flex items-center justify-between text-black font-bold px-6 py-2 w-[180px] h-[48px] rounded-md border-2 border-gray-300 hover:bg-[#A4C400] transition">
        <span className="text-[16px] whitespace-nowrap">Open A Store</span>
        <AiFillShop size={20} className="text-[#A4C400] hover:text-black" />
      </button>

      <div className="flex items-center border border-gray-300 rounded-lg">
        <div className="flex items-center justify-center p-3">
          <AiOutlineUser size={24} className="text-gray-600" />
        </div>

        <div className="w-px bg-gray-300 h-6"></div>

        <button
          onClick={togglePopup}
          className="flex items-center justify-center p-3"
        >
          <AiOutlineDown size={24} className="text-gray-600" />
        </button>
      </div>

      {isPopupVisible && (
        <div className="absolute top-14 right-0 bg-white rounded-2xl shadow-lg  border-gray-300  z-50">
          <Profile />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
