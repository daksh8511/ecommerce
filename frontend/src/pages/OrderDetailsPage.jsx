import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDtails, setOrderDetails] = useState(null);
  console.log(orderDtails);
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
              <p>Address : </p>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
