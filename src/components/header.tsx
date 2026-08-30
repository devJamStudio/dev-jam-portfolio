import React from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import DarkModeToggle from "./darkModeToggle";
import LangToggle from "./langToggle";
import MenuToggle from "./menuToggle";
import { usePath } from "../i18n/LocaleContext";

interface HeaderProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ toggle, setToggle }) => {
  const path = usePath();

  return (
    <div className="navbar flex flex-row border-b-2 border-black duration-300 dark:border-white shadow-dark  dark:shadow-light bg-white dark:bg-black px-4 py-3 md:px-6 md:py-4 w-full justify-between items-center">
      <Link to={path("/")} aria-label="devJam Studio">
        <Logo className="fill-black dark:fill-white" width="116" height="76" />
      </Link>
      <div className="flex flex-row gap-5 items-center">
        <LangToggle />
        <DarkModeToggle />
        <MenuToggle toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
};

export default Header;
