import React from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import DarkModeToggle from "./darkModeToggle";
import LangToggle from "./langToggle";
import MenuToggle from "./menuToggle";
import { useNavLinks } from "./menu";
import { usePath } from "../i18n/LocaleContext";

interface HeaderProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ toggle, setToggle }) => {
  const path = usePath();
  const links = useNavLinks();

  return (
    <div className="navbar sticky top-0 z-30 border-b-2 border-black dark:border-white shadow-dark dark:shadow-light bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-6 px-5 py-3 md:px-10 md:py-4">
        <Link to={path("/")} aria-label="devJam Studio">
          <Logo
            className="fill-black dark:fill-white w-[84px] h-[55px] md:w-[116px] md:h-[76px]"
            width="116"
            height="76"
          />
        </Link>

        {/* Desktop: the pages are right there; the menu button is for phones. */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 font-ocr text-lg">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  partiallyActive
                  activeClassName="underline decoration-2 underline-offset-8 decoration-pink-400 dark:decoration-teal-300"
                  className="hover:text-pink-600 dark:hover:text-teal-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row gap-5 items-center">
          <LangToggle />
          <DarkModeToggle />
          <div className="lg:hidden flex">
            <MenuToggle toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
