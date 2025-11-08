// Client/src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { Menu, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
  } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center justify-between px-4 md:px-14 py-4 border-b border-gray-200 bg-white relative transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img src={assets.Logo} alt="Logo" className="h-9" />
      </NavLink>

      {/* ---------------- DESKTOP MENU ---------------- */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink className=" " to="/">
          Home
        </NavLink>

        <NavLink className=" " to="/products">
          All Products
        </NavLink>

        <NavLink className=" " to="/contact">
          Contact
        </NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-200 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none   placeholder-gray-300"
            type="text"
            placeholder="Search products"
          />

          {/* <img src={assets.search_icon} alt="Search" className="w-4 h-4" /> */}
          <Search className="size-6 text-black" />
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          {/* <img
            src={assets.nav_cart_icon}
            alt="Cart"
            className="w-6 opacity-80"
          /> */}

          <ShoppingCart className="size-6 text-black opacity-80" />

          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {/* {!user ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-md hover:rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group hover:cursor-pointer">
            <img src={assets.profile_icon} alt="Profile" className="w-10" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40 ">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1 pl-3 hover:bg-primary/10  cursor-pointer"
              >
                My Orders
              </li>

              <li
                onClick={logout}
                className="p-1 pl-3 hover:bg-primary/10  cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )} */}

        {!user ? (
          <Button
            text="Login"
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            variant="primary"
          />
        ) : (
          <div className="relative group hover:cursor-pointer">
            <img src={assets.profile_icon} alt="Profile" className="w-10" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1 pl-3 hover:bg-primary/10  cursor-pointer"
              >
                My Orders
              </li>

              <li
                onClick={logout}
                className="p-1 pl-3 hover:bg-primary/10  cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* <img src={assets.menu_icon} alt="Menu" /> */}

        <Menu className="text-black cursor-pointer" />
      </button>

      {/* ---------------- MOBILE MENU ---------------- */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={() => setOpen(false)}>
            All Product
          </NavLink>

          {user && (
            <NavLink to="/products" onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
          )}

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {!user ? (
            // <button
            //   onClick={() => {
            //     setOpen(false);
            //     setShowUserLogin(true);
            //   }}
            //   className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-md hover:rounded-full"
            // >
            //   Login
            // </button>

            <Button
              text="Login"
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              variant="primary"
            />
          ) : (
            // <button
            //   onClick={logout}
            //   className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-md hover:rounded-full"
            // >
            //   Logout
            // </button>

            <Button text="Logout" onClick={logout} variant="primary" />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
