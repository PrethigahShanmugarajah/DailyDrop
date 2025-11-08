// Client/src/components/NewsLetter.jsx
import React from "react";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts
      </p>

      <form className="flex w-full max-w-2xl">
        <div className="flex w-full border border-gray-200 rounded-md transition hover:rounded-full overflow-hidden">
          <input
            className="flex-1 px-3 py-2 text-gray-500 outline-none placeholder-gray-300"
            type="email"
            placeholder="Enter your email id"
            required
          />

          <Button text="Subscribe" type="submit" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
