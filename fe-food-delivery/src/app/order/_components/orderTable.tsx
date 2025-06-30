"use client";

type Order = {
  id: number;
  customer: string;
  food: string;
  date: string;
  total: string;
  status: "Pending" | "Delivered" | "Canceled";
  address: string;
};

const sampleData: Order[] = Array(10).fill({
  id: 1,
  customer: "Test@gmail.com",
  food: "2 foods",
  date: "2024/12/20",
  total: "$28.97",
  status: "Pending",
  address: "2024/12/20, 12-р хороо, БЗД...",
});

export default function OrdersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Food</th>
            <th className="p-2">Date</th>
            <th className="p-2">Total</th>
            <th className="p-2">Delivery Address</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((order, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{order.customer}</td>
              <td className="p-2">{order.food}</td>
              <td className="p-2">{order.date}</td>
              <td className="p-2">{order.total}</td>
              <td className="p-2">{order.address}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-xs 
                  ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : ""
                  }
                  ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : ""
                  }
                  ${
                    order.status === "Canceled" ? "bg-red-100 text-red-800" : ""
                  }
                `}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
