import React from "react";

interface Props {
  title: string;
  price: string;
  image: string;
}

export default function MenuCard({ title, price, image }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img
        src={"hool.png"}
        alt={"hool"}
        className="rounded-md mb-2 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  );
}
