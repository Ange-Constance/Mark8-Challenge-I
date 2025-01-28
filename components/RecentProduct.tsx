import { HiOutlineFilter } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";
import { FaStore } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { ShopItem } from "./ShopItem";
import ProductCard from "./ProductCard";
import {  AiOutlineDown} from "react-icons/ai";
import { OpenStore } from "./OpenStore";

const RecentProduct: React.FC = () => {

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 9000,
      oldPrice: 12000,
      imageUrl: '/product-bg.png',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15000,
      oldPrice: 18000,
      imageUrl: '/product-bg.png',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 10000,
      imageUrl: '/product-bg.png', // No oldPrice
    }
  ];

  return (

<div className="mx-20 ">

    <div className="flex items-center justify-between w-full h-[64px]  bg-white rounded-lg">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <div className="w-[24px] h-[24px] flex items-center justify-center rounded-md">
          <HiOutlineFilter size={16} className="text-[#D4FA24]" />
        </div>
        <span className="text-black font-semibold text-sm">Recent Product (100)</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Filter Icon */}
        <div className="flex items-center justify-center w-[36px] h-[36px] border-2 border-gray-300 rounded-md">
          <HiOutlineFilter size={16} className="text-black" />
        </div>
        {/* User Icon */}
        <div className="flex items-center justify-center w-[36px] h-[36px] border-2 border-gray-300 rounded-md">
          <FaRegUser size={16} className="text-black" />
        </div>
      </div>
    </div>

<div className="flex flex-row justify-between mb-10">

    {/* Left cards */}
    <div className="flex flex-col items-center gap-6">
<div className="flex flex-row gap-6">
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

<div className="flex flex-row gap-6">
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

<div className="">

<button className="flex flex-row justify-center gap-3  px-8 py-2 items-center border border-gray-300 rounded-lg w-[161px] h-[48px] whitespace-nowrap ">
    <AiOutlineDown size={16} className="text-[#D4FA24]" />
    <span className="font-semibold text-[14px]">Load More</span>
</button>

</div>

</div>
     
{/* right menu */}
    
    <div className="border border-gray-300 w-[327px] rounded-2xl">
    <div className="flex items-center justify-between w-[327px] h-[64px] p-5">
      {/* Store Icon and Text */}
      <div className="flex items-center gap-5">
        <FaStore className="text-[#D4FA24] text-lg" />
        <span className="text-sm font-semibold text-black">Top 10 Stores</span>
      </div>
      {/* Edit Icon */}
      <FiEdit2 className="text-gray-400 cursor-pointer hover:text-gray-700" />
    </div>
    
    <div className="  justify-between px-5 bg-[#F7F8FB] w-[327px] h-[88px] py-5 mb-5">
    <div className="flex items-center justify-between w-[280px] h-[48px] px-4 bg-white border border-gray-300 rounded-lg shadow-sm">
      {/* Search Icon and Input */}
      <div className="flex items-center gap-2">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search a store"
          className="w-full text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
        />
      </div>
      {/* Filter Icon */}
      <div className="flex items-center">
        <HiAdjustments className="text-gray-500" />
      </div>
    </div>
    </div>

    <div className="">
    <ShopItem/>
    <ShopItem/>
    <ShopItem/>
    <ShopItem/>
    <ShopItem/>
    <ShopItem/>
    </div>
    </div>
    </div>
{/* // End of Right menu */}

<OpenStore/>
</div>
  );
};

export default RecentProduct;
