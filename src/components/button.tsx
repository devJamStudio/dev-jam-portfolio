import React from "react";

interface ButtonProps {
  children: any;
  type: any;
}

const Button: React.FC<ButtonProps> = ({ children, type }) => (
  <button
    type={type}
    className="border-2 text-center mt-8 mb-6 hover:shadow-[0] dark:hover:shadow-[0] shadow-dark text-black  dark:borer-white dark:shadow-light border-black dark:border-white hover:dark:text-white dark:text-white py-2 px-5 min-w-[33%] rounded-lg bg-teal-400 hover:bg-teal-200 dark:bg-amber-600 dark:hover:bg-amber-500 duration-200"
  >
    {children}
  </button>
);

export default Button;
