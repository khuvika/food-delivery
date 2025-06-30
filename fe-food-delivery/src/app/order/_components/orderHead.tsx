"use client";

export default function OrdersHeader() {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-lg font-semibold">Orders</h2>
      <button className="bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200">
        Change delivery state
      </button>
    </div>
  );
}
