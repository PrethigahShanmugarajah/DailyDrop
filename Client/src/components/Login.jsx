// Client/src/components/Login.jsx
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Button from "./Button";
import Title from "./Title";

const Login = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setUser({
      email: "testemail@email.com",
      name: "Test Name",
    });
    setShowUserLogin(false);
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex ietms-center text-sm text-gray-600 bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-black rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <div className="w-full flex justify-center">
          <Title
            text1={"User"}
            text2={state === "login" ? "Login" : "Sign Up"}
          />
        </div>
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your Name"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary placeholder-gray-300"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your Email"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary placeholder-gray-300"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Your Password"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary placeholder-gray-300"
            type="password"
            required
          />
        </div>
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-primary cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-primary cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
        {/* <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
          {state === "register" ? "Create Account" : "Login"}
        </button> */}

        <Button
          text={state === "register" ? "Create Account" : "Login"}
          type="submit"
          className="w-full"
          variant="primary"
        />
      </form>
    </div>
  );
};

export default Login;
