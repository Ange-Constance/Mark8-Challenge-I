"use client";
import React from "react";
import StoreItem from "../StoreItem";
import { useGetRecentStoresQuery } from "../../store/endpoints/storesSlice";
import { AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { OpenStore } from "../OpenStore";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Stores: React.FC = () => {
  const { data, error, isLoading } = useGetRecentStoresQuery();

  if (isLoading) return <p>Loading stores...</p>;
  if (error) return <p>Error loading stores.</p>;

  const stores = data?.data.stores || [];

  return (
    <div className="">
      <Navbar />
      <div className="mx-20 mt-6">
        <div className="relative rounded-2xl text-black p-10 w-full h-[262px] flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/product-bg.png')",
              opacity: 1,
            }}
          ></div>

          <div className="absolute inset-0 bg-[#F7F8FB] opacity-90 rounded-2xl"></div>

          <div className="relative text-center">
            <h1 className="text-2xl font-bold mb-2">
              <span className="text-[#A4C400]">Mark8</span> Stores
            </h1>
            <p className="text-gray-400">{stores.length} stores</p>

            <div className="flex items-center bg-[#0C0C0D0A] rounded-md px-4 py-2 w-[600px] mt-4 shadow-md">
              <AiOutlineSearch size={20} className="text-[#A4C400] mr-2" />
              <input
                type="text"
                placeholder="Search Store?"
                className="bg-transparent focus:outline-none flex-1 text-black placeholder-gray-500"
              />
              <FiSettings
                size={20}
                className="text-gray-400 cursor-pointer hover:text-black ml-2"
              />
            </div>

            <div className="flex gap-4 mt-6">
              {["All", "Men", "Women", "Kids"].map((category) => (
                <button
                  key={category}
                  className="px-4 py-1 border rounded-full text-sm text-black border-gray-500 hover:bg-[#A4C400] hover:text-white transition"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-11 mt-8">
          {stores.map((store) => (
            <StoreItem key={store.id} store={store} />
          ))}
        </div>

        <div className="flex justify-center mb-11">
          <button className="flex flex-row justify-center gap-3 px-8 py-2 items-center border border-gray-300 rounded-lg w-[161px] h-[48px] whitespace-nowrap">
            <AiOutlineLeft size={16} className="text-[#D4FA24]" />
            <span className="font-semibold text-[14px]">Load More</span>
          </button>
        </div>

        <div className="mb-11">
          <OpenStore />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stores;
