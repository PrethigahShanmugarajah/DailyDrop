// Client/src/components/Button.jsx
import React from "react";

const Button = ({ text, onClick, className, type = "button" }) => {
  const baseClasses =
    "cursor-pointer px-8 py-2 bg-primary text-white rounded-md transition hover:bg-primary-dull hover:rounded-full  ";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
