// Client/src/pages/seller/SellerLayout .jsx
import React from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";
import Button from "../../components/Button";
import { ListOrdered, ShoppingBag, SquarePlus } from "lucide-react";

const SellerLayout = () => {
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

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: <SquarePlus size={22} /> },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: <ListOrdered size={22} />,
    },
    { name: "Orders", path: "/seller/orders", icon: <ShoppingBag size={22} /> },
  ];

  const logout = async () => {
    setIsSeller(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        <Link to="/">
          <img
            src={assets.Logo}
            alt="Logo"
            className="cursor-pointer w-34 md:w-38"
          />
        </Link>

        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          {/* <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1"
          >
            Logout
          </button> */}

          <Button text={"Logout"} onClick={logout} variant={"secondary"} />
        </div>
      </div>

      <div className="flex">
        <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                    : "hover:bg-gray-100/90 border-white"
                }`
              }
            >
              {/* <img src={item.icon} alt="" className="w-7 h-7" /> */}

              <div className="w-7 h-7 flex items-center justify-center text-black">
                {item.icon}
              </div>
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default SellerLayout;
