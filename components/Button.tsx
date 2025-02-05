"use client";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text?: string;
  icon?: IconType;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  text = "Load More",
  icon: Icon,
  onClick,
  variant = "default",
}) => {
  const baseStyles =
    "flex flex-row justify-center gap-3 px-8 py-2 items-center border rounded-lg w-[161px] h-[48px] whitespace-nowrap font-semibold text-[14px] transition";

  const variants = {
    default: "border-gray-300 text-gray-700 hover:bg-gray-100",
    primary: "border-blue-500 text-blue-600 hover:bg-blue-100",
    secondary: "border-green-500 text-green-600 hover:bg-green-100",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {Icon && <Icon size={16} className="text-[#D4FA24]" />}
      {text}
    </button>
  );
};

export default Button;
