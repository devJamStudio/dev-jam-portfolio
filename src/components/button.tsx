import React from "react";

// One look for real buttons and for links that read as buttons. Links take the
// class directly: a <button> inside an <a> is invalid HTML and gave keyboard
// users two tab stops per control. Hover presses it into its shadow.
// Dark mode is pink-500 with dark text, which keeps contrast above 4.5:1.
export const buttonClass =
  "inline-block border-2 text-center mt-3 mb-3 shadow-dark dark:shadow-light hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:hover:shadow-none text-black border-black dark:border-white py-1.5 px-4 min-w-[33%] rounded-lg bg-teal-400 hover:bg-teal-200 dark:bg-pink-500 dark:hover:bg-pink-400 transition duration-200 motion-reduce:transition-none";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ children, type }) => (
  <button type={type} className={buttonClass}>
    {children}
  </button>
);

export default Button;
