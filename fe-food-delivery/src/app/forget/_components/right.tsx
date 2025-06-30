import React from "react";
import Image from "next/image";

export default function Right() {
  return (
    <div className="hidden md:block w-1/2 h-full relative">
      <Image
        src="/food.png"
        alt="food"
        layout="fill"
        objectFit="cover"
        className="rounded-l-lg"
      />
    </div>
  );
}
