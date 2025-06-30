"use client";

import { Plus } from "lucide-react";

export default function AddCategory() {
  return (
    <div>
      <p className="text-2xl font-bold">Dishes category</p>
      <div className="flex items-center justify-center w-12 h-12 bg-[#EF4444] text-white rounded-full text-2xl">
        <Plus />
      </div>
    </div>
  );
}
