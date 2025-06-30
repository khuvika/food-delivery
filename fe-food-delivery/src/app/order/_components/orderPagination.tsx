"use client";

export default function OrderPagination() {
  return (
    <div className="flex justify-center mt-4 gap-2">
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className="w-8 h-8 rounded-md border hover:bg-gray-100"
        >
          {page}
        </button>
      ))}
    </div>
  );
}
