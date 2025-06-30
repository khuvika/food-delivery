import OrdersHeader from "./_components/orderHead";
import OrderPagination from "./_components/orderPagination";
import OrdersTable from "./_components/orderTable";
export default function OrdersPage() {
  return (
    <div className="bg-white shadow-md rounded-lg m-6 p-4">
      <OrdersTable />
      <OrdersHeader />
      <OrderPagination />
    </div>
  );
}

//bg-white shadow-md rounded-lg m-6 p-4
