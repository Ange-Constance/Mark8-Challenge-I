import React from "react";

import { HiOutlineUser } from "react-icons/hi";

const Profile = () => {
  return (
    <div className="flex flex-col gap-8 px-10 py-8  w-[306px] h-[482px] shadow-2xl rounded-bl-2xl rounded-br-2xl ">
      <div className="flex flex-row w-[327px] h-[60px]  ">
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
            <h1 className="text-[14px] font-semibold mb-2">Ange Constance </h1>
            <p className="text-[12px] font-light">xyz@awesomity.rw</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-10 border-b-2 border-t-2 border-gray-200">
        <a className="flex items-center text-gray-700 hover:text-gray-900">
          <HiOutlineUser className="text-lg" />
          <span className="ml-4 text-[14px] font-normal">My Account</span>
        </a>
        <a className="flex items-center text-gray-700 hover:text-gray-900">
          <HiOutlineUser className="text-lg" />
          <span className="ml-4 text-[14px] font-normal">My Order</span>
        </a>
        <a className="flex items-center text-gray-700 hover:text-gray-900">
          <HiOutlineUser className="text-lg" />
          <span className="ml-4 text-[14px] font-normal">Help</span>
        </a>
        <a className="flex items-center text-gray-700 hover:text-gray-900">
          <HiOutlineUser className="text-lg" />
          <span className="ml-4 text-[14px] font-normal">About</span>
        </a>
        <a className="flex items-center text-gray-700 hover:text-gray-900">
          <HiOutlineUser className="text-lg" />
          <span className="ml-4 text-[14px] font-normal">Settings</span>
        </a>
      </div>

      <div>
        <a className="flex items-center text-gray-700 hover:text-gray-900">
          <HiOutlineUser className="text-lg" />
          <span className="ml-4 text-[14px] font-normal">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
