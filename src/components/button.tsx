import React from "react";

interface ButtonProps {
  children: any;
  type: any;
}

const Button: React.FC<ButtonProps> = ({ children, type }) => (
  <button
    type={type}
    // Hover presses the button into its shadow.
    className="border-2 text-center mt-3 mb-3 shadow-dark dark:shadow-light hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:hover:shadow-none text-black border-black dark:border-white hover:dark:text-white dark:text-white py-1.5 px-4 min-w-[33%] rounded-lg bg-teal-400 hover:bg-teal-200 dark:bg-amber-600 dark:hover:bg-amber-500 transition duration-200 motion-reduce:transition-none"
  >
    {children}
  </button>
);

export default Button;
