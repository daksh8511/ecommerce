import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const order = [
    {
      _id: 123123,
      user: {
        name: "Govind sathwara",
      },
      totalPrice: 10,
      status: "Processing",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Admin dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl">$10,000</p>
        </div>

        <div className="p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Total orders</h2>
          <p className="text-2xl">200</p>
          <Link to={"/admin/orders"} className="text-blue-500 hover:underline">
            Manage orders
          </Link>
        </div>

        <div className="p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Total products</h2>
          <p className="text-2xl">10</p>

          <Link
            to={"/admin/products"}
            className="text-blue-500 hover:underline"
          >
            Manage products
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {order.length > 0
                ? order.map((myOrder) => (
                    <tr className="border-b hover:bg-gray-50 cursor-pointer">
                      <td className="p-4">{myOrder?._id}</td>
                      <td className="p-4">{myOrder?.user?.name}</td>
                      <td className="p-4">{myOrder?.totalPrice}</td>
                      <td className="p-4">{myOrder?.status}</td>
                    </tr>
                  ))
                : "No orders"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
