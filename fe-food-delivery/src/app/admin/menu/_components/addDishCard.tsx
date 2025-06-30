"use client";

import { Plus } from "lucide-react";

export default function AddDishCard() {
  return (
    <div className="w-full">
      <p className="text-2xl font-bold"> food</p>
      <div className="flex flex-col items-center justify-center border border-[#EF4444] rounded-[20px] p-4 w-[300px] h-[300px] cursor-pointer hover:bg-red-50 transition">
        <div className="flex items-center justify-center w-12 h-12 bg-[#EF4444] text-white rounded-full text-2xl">
          <Plus />
        </div>
        <p className="mt-4 text-center text-black text-lg">
          Add new Dish to <br /> Salads
        </p>
      </div>
    </div>
  );
}
