"use client";
import React from "react";
import StoreItem from "../StoreItem";
import { useGetRecentStoresQuery } from "../../store/endpoints/storesSlice";

const Stores: React.FC = () => {
  const { data, error, isLoading } = useGetRecentStoresQuery();

  if (isLoading) return <p>Loading stores...</p>;
  if (error) return <p>Error loading stores.</p>;

  const stores = data?.data.stores || [];

  return (
    <div className="mx-20">
      <div className="bg-[#F7F8FB] rounded-2xl">
        <div className="text-center p-10">
          <h1 className="text-2xl font-bold">Mark8 Stores</h1>
          <p className="text-gray-400">{stores.length} stores</p>
        </div>
      </div>
      <div className="flex flex-col mb-11">
        {stores.map((store) => (
          <StoreItem key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default Stores;
