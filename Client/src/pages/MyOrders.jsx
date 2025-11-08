import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useAppContext } from "../context/AppContext";
import { dummyOrders } from "../assets/assets";
import { formatDate } from "../utils/dateTime";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
  } = useAppContext();

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <Title text1={"My"} text2={"Orders"} />
      </div>

      {myOrders.map((order, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
            <span>OrderId: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>
              Total Amount:{currency} {order.amount}
            </span>
          </p>
          {order.items.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white text-gray-500/70 $70{order.items.length !== index + 1 && "border-b"} border-gray-200 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 mmd:gap-16 w-full max-w-4xl`}
            >
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <img
                    src={item.product.image[0]}
                    alt=""
                    className="w-16 h-16"
                  />
                </div>

                <div className="ml-4">
                  <h2 className="text-xl font-medium text-black">
                    {item.product.name}
                  </h2>

                  <p>Category: {item.product.category}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0 text-black">
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>Date: {formatDate(order.createdAt)}</p>
              </div>

              <p className="text-primary text-lg font-medium">
                Amount: {currency} {item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
