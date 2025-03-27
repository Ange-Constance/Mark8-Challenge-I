"use client";
import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-100% h-[120px] px-20 flex justify-between items-center bg-[#F4F5F6]">
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <Image src="/logo.png" alt="Mark8 Logo" width={40} height={40} />
        <span className="text-[16px] font-bold text-[#0C0F0F]">Mark8</span>
      </div>
      <div className="text-[16px] text-gray-600">
        <span>©2025. AlgoCart</span>
        <span className="mx-2">By</span>
        <span>Algo2025</span>
      </div>

      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        {/* Twitter Icon */}
        <FaTwitter className="text-black text-1xl " />

        {/* Instagram Icon */}
        <FaInstagram className="text-black text-1xl " />

        {/* YouTube Icon */}
        <FaYoutube className="text-black text-1xl " />

        {/* LinkedIn Icon */}
        <FaLinkedin className="text-black text-1xl" />
      </div>
    </div>
  );
};

export default Footer;
