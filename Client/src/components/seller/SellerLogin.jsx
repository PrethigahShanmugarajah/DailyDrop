// Client/src/components/seller/SellerLogin.jsx
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import Button from "../Button";
import Title from "../Title";

const SellerLogin = () => {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSeller(true);
  };

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 ">
          <div className="w-full flex justify-center">
            <Title text1={"Seller"} text2={"Login"} />
          </div>

          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Your Email"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary placeholder-gray-300"
              required
            />
          </div>

          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Your Password"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary placeholder-gray-300"
              required
            />
          </div>

          <Button text={"Login"} className={"w-full"} variant={"primary"} />
        </div>
      </form>
    )
  );
};

export default SellerLogin;
