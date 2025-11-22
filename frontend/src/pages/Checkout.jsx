import React, { useState } from "react";
import PaypalButton from "../component/Cart/PaypalButton";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone_number: 0,
  });

  const navigate = useNavigate();

  const [checkoutid, setCheckoutud] = useState("");

  const cart = {
    products: [
      {
        id: 1,
        name: "Stylish jacket",
        color: "Black",
        sie: "M",
        price: 120,
        image: "https://picsum.photos/150?random=1",
      },
      {
        id: 2,
        name: "Casual sneakers",
        color: "Yellow",
        sie: "S",
        price: 150,
        image: "https://picsum.photos/150?random=2",
      },
    ],
    totalPrice: 270,
  };

  const handlePaymentSuccess = (details) => {
    console.log("detials : ", details);
    navigate("/order-confirmation");
  };

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutud(124);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form action="">
          <h3 className="text-lg mb-4">Contact details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={"dax@gmail.com"}
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required={true}
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Last name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required={true}
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="p-2 border rounded w-full"
              required={true}
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required={true}
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal code</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required={true}
                value={shippingAddress.postalCode}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value.replace(/[^0-9]/g, ""),
                  });
                }}
                maxLength={6}
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required={true}
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone no.</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required={true}
                value={shippingAddress.phone_number}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    phone_number: e.target.value.replace(/[^0-9]/g, ""),
                  });
                }}
                maxLength={10}
              />
            </div>
          </div>
          <div>
            {!checkoutid ? (
              <button
                onClick={handleCreateCheckout}
                className="w-full bg-black text-white text-center py-3"
              >
                Checkout
              </button>
            ) : (
              <>
                <h2>Pay with paypal</h2>
                <PaypalButton
                  amount={10}
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment failed. try again")}
                />
              </>
            )}
          </div>
        </form>
      </div>

      {/* right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products?.map((pro, i) => (
            <div
              key={i}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={pro.image}
                  alt="image"
                  className="w-20 h-24 object-cover mr-4"
                />
                <div className="text-md">
                  <h3>{pro.name}</h3>
                  <p className="text-gray-500">Size : {pro.sie}</p>
                  <p className="text-gray-500">Color : {pro.color}</p>
                </div>
              </div>
                <p className="text-xl">${pro.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart?.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between text-lg items-center">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${cart?.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
