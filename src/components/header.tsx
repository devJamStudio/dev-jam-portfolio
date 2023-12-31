import React from "react";
import Logo from "./logo";
import DarkModeToggle from "./darkModeToggle";
import MenuToggle from "./menuToggle";

interface HeaderProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ toggle, setToggle }) => (
  <div className="navbar flex flex-row border-b-2 border-black duration-300 dark:border-white shadow-dark  dark:shadow-light bg-white dark:bg-black p-8 w-full justify-between items-center">
    <Logo className="fill-black dark:fill-white" width="116" height="76" />
    <div className="flex flex-row gap-5 items-center">
      <DarkModeToggle />
      <MenuToggle toggle={toggle} setToggle={setToggle} />
    </div>
  </div>
);

export default Header;
