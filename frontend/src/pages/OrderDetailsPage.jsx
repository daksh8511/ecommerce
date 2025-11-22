import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDtails, setOrderDetails] = useState(null);
  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Paypal",
      shippingMethod: "Standard",
      shippingAddress: { city: "Ahmedabad", country: "India" },
      orderItems: [
        {
          productId: 1,
          name: "Jacket",
          price: 120,
          quantity: 2,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: 2,
          name: "Jeans",
          price: 220,
          quantity: 1,
          image: "https://picsum.photos/150?random=2",
        },
        {
          productId: 3,
          name: "T-Shirt",
          price: 100,
          quantity: 2,
          image: "https://picsum.photos/150?random=3",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order details</h2>

      {!orderDtails ? (
        <p>No orders found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* order info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID #{orderDtails?._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDtails?.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDtails?.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } p-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDtails?.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDtails?.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-yellow-700"
                } p-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDtails?.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>
          {/* customer info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment info</h4>
              <p>Payment method : {orderDtails?.paymentMethod}</p>
              <p>Status : {orderDtails?.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping info</h4>
              <p>Shipping method : {orderDtails?.shippingMethod}</p>
              <p>
                Address : {orderDtails?.shippingAddress?.city},{" "}
                {orderDtails?.shippingAddress?.country}{" "}
              </p>
            </div>
          </div>
          {/* product list */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDtails?.orderItems?.map((items) => (
                  <tr key={items?.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center  justify-center">
                      <img
                        src={items?.image}
                        alt="image"
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${items?.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {items?.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4 text-center">${items?.price}</td>
                    <td className="py-2 px-4 text-center">${items?.quantity}</td>
                    <td className="py-2 px-4 text-center">
                      ${items?.price * items?.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to={'/my-orders'} className="text-blue-500 hover:underline">Back to my orders</Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
