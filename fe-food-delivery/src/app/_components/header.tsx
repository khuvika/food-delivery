"use client";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="">
        <Image src={"/logo.png"} alt="logo" height={44} width={146} />
      </div>
      <div className="flex gap-4 items-center">
        <span>Delivery address</span>
        <input
          type="text"
          placeholder="Add Location"
          className="bg-gray-800 px-2 py-1 rounded"
        />
        <span className="text-sm">test@gmail.com</span>
      </div>
    </div>
  );
}
