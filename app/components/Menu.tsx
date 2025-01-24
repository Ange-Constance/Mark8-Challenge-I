'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillHome, AiFillShop } from 'react-icons/ai';


const Menu = () => {
  const pathname = usePathname(); // Get the current path

  const isActive = (path: string) => pathname === path;

  return (
    <div>
      <nav className="flex items-center space-x-6 p-4 text-[12px]">
        {/* Home Link */}
        <Link
          href="/"
          className={`flex items-center space-x-2 ${
            isActive('/') ? 'text-[#A4C400]' : 'text-gray-600'
          } hover:text-green-500`}
        >
          <AiFillHome size={16} />
          <span>Home</span>
     
        </Link>

        {/* Store Link */}
        <Link
          href="/store"
          className={`flex items-center space-x-2 ${
            isActive('/store') ? 'text-[green-500]' : 'text-gray-600'
          } hover:text-green-500`}
        >
          <AiFillShop size={16} />
          <span>Store</span>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
