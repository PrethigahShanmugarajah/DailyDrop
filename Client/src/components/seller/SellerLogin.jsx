import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import Button from "../Button";
import Title from "../Title";
import { notify } from "../ToastProvider";

const SellerLogin = () => {
  const { navigate, isSeller, setIsSeller, axios } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post("/api/seller/login", {
        email,
        password,
      });

      if (data.success) {
        setIsSeller(true);
        navigate("/seller");
        notify.success(data.message);
      } else {
        notify.error(data.message);
      }
    } catch (error) {
      notify.error(error.message);
    }
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
        className="min-h-screen flex items-center text-sm text-black"
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
