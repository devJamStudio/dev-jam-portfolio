import React from "react";

interface ButtonProps {
  children: any;
  type: any;
}

const Button: React.FC<ButtonProps> = ({ children, type }) => (
  <button
    type={type}
    className="border-2 text-center mt-3 mb-3 hover:shadow-[0] dark:hover:shadow-[0] shadow-dark text-black  dark:borer-white dark:shadow-light border-black dark:border-white hover:dark:text-white dark:text-white py-1.5 px-4 min-w-[33%] rounded-lg bg-teal-400 hover:bg-teal-200 dark:bg-amber-600 dark:hover:bg-amber-500 duration-200"
  >
    {children}
  </button>
);

export default Button;
