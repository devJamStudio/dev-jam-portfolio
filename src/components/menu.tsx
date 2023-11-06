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
        `flex border-black border-y-2 border-l-4 dark:border-white fixed h-full pt-4 right-0 justify-center shadow-dark    duration-500 bg-white dark:bg-black   ` +
        (toggle ? "w-full lg:w-4/12 " : "w-0 transform translate-x-full ")
      }
    >
      <Nav toggle={toggle} Links={Links} />
    </div>
  );
};
export default Menu;
