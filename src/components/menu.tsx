import React from "react";
import Nav from "./nav";

interface MenuProps {
  toggle: boolean;
}

const Menu: React.FC<MenuProps> = ({ toggle }) => {
  var Links = ["about", "contact", "portfolio", "tech-stack"];

  return (
    <div
      className={
        `flex border-black border-x-2 dark:border-white fixed h-full right-0 justify-center  duration-500 bg-white dark:bg-black   ` +
        (toggle ? "w-full lg:w-4/12 " : "w-0 transform translate-x-full ")
      }
    >
      <Nav toggle={toggle} Links={Links} />
    </div>
  );
};
export default Menu;
