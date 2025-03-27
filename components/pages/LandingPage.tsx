"use client";
import React from "react";
import WelcomeComponent from "../WelcomeComponent";
import RecentProduct from "../RecentProduct";
import Footer from "../Footer";
import Navbar from "../Navbar";

const LandingPage = () => {
  return (
    <div>
      <main className="flex flex-col min-h-screen gap-6">
        <Navbar />
        <WelcomeComponent />
        <RecentProduct />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
