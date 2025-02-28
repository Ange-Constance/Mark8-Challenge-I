"use client";
import React from "react";
import WelcomeComponent from "../WelcomeComponent";
import RecentProduct from "../RecentProduct";

const LandingPage = () => {
  return (
    <div>
      <main className="flex flex-col min-h-screen p-4">
        <WelcomeComponent />
        <RecentProduct />
      </main>
    </div>
  );
};

export default LandingPage;
