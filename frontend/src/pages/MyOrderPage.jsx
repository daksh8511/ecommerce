import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          id: 123,
          createdAt: new Date(),
          shippingAddress: { city: "Ahmedabad", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 200,
          isPaid: true,
        },
        {
          id: 12345,
          createdAt: new Date(),
          shippingAddress: { city: "Delhi", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 500,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`)
  }

  console.log(orders);
  return (
    <div className="max-w-7xl mx-auto sm:p-6 p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="shadow-md relative sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:p-3">Order ID</th>
              <th className="py-2 px-4 sm:p-3">Image</th>
              <th className="py-2 px-4 sm:p-3">Created</th>
              <th className="py-2 px-4 sm:p-3">Shipping address</th>
              <th className="py-2 px-4 sm:p-3">Items</th>
              <th className="py-2 px-4 sm:p-3">Price</th>
              <th className="py-2 px-4 sm:p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0
              ? "No orders found"
              : orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b hover:border-gray-50 cursor-pointer"
                    onClick={() => handleRowClick(order?.id)}
                  >
                    <td className="py-2 px-4 sm:py-4 sm:px-4">
                      <h3>{order?.id}</h3>
                    </td>
                    <td className="py-2 px-4 sm:py-4 sm:px-4">
                      <img
                        src={order.orderItems[0].image}
                        alt="products"
                        className="w-10 h-10 sm:h-12 sm:w-12 object-conver rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-4 sm:py-4 sm:px-4">
                      <h3>{order.createdAt.toLocaleDateString()}</h3>
                    </td>
                    <td className="py-2 px-4 sm:py-4 sm:px-4">
                      <h3>{order.shippingAddress.city}</h3>
                    </td>
                    <td className="py-2 px-4 sm:py-4 sm:px-4">
                      <h3>{order.orderItems[0].name}</h3>
                    </td>
                    
                    <td className="py-2 px-4 sm:py-4 sm:px-4">
                      <h3>{order.totalPrice}</h3>
                    </td>
                    <td className="py-2 px-4 sm:py-4 sm:px-4">
                      <h3 className={`${order.isPaid ? "text-green-500 bg-green-500" : "text-red-500 bg-red-500"}}`}>{order.isPaid ? 'Paid' : "Not Paid"}</h3>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
