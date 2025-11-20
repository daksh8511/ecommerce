import React from "react";

const OrderConfirmationPage = () => {
  const checkout = {
    _id: "12345",
    createdAt: new Date(),
    checkoutItems: [
      {
        productId: "1",
        name: "Jacket",
        color: "Black",
        size: "M",
        price: 150,
        quantity: 1,
        image: "https://picsum.photos/500/500?random=1",
      },
      {
        productId: "2",
        name: "Jeans",
        color: "White",
        size: "XXL",
        price: 250,
        quantity: 3,
        image: "https://picsum.photos/500/500?random=2",
      },
    ],
  };

  const shippingAddress = {
    address: "123 fashion street",
    city: "New york",
    country: "USA",
  };

  const calculateEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for order
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID : {checkout?._id}
              </h2>
              <p className="text-gray-500">
                Order date :{" "}
                {new Date(checkout?.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* estimated deliver */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery :{" "}
                {calculateEstimateDelivery(checkout?.createdAt)}
              </p>
            </div>
          </div>
          {/* ordered items */}
          <div className="mb-20">
            {checkout?.checkoutItems?.map((items) => (
              <div className="flex items-center mb-4" key={items.productId}>
                <img
                  src={items.image}
                  alt="image"
                  className="h-16 w-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="font-semibold text-md">{items.name}</h4>
                  <p className="text-sm text-gray-500">
                    Color : {items.color} | {items.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">${items?.price}</p>
                  <p className="text-sm text-gray-500">
                    Qty : {items.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* paymenet and delivery info */}
          <div className="grid grid-cols-2 gap-8">
            {/* payment info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>
            {/* delivery info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">{shippingAddress?.address}</p>
              <p className="text-gray-600">
                {shippingAddress?.city} {shippingAddress?.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
