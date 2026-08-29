import React from "react";
import Nav from "./nav";
import type { NavLink } from "./nav";
import { useCopy, usePath } from "../i18n/LocaleContext";

interface MenuProps {
  toggle: boolean;
}

const Menu: React.FC<MenuProps> = ({ toggle }) => {
  const copy = useCopy();
  const path = usePath();

  const Links: NavLink[] = [
    { label: copy.nav.offer, to: path("/offer") },
    { label: copy.nav.stack, to: path("/tech-stack") },
    { label: copy.nav.portfolio, to: path("/portfolio") },
    { label: copy.nav.about, to: path("/about") },
    { label: copy.nav.contact, to: path("/contact") },
  ];

  return (
    <div
      className={
        `flex border-black border-y-2 md:border-l-4 dark:border-white fixed h-full pt-4 right-0 justify-center shadow-dark    duration-500 bg-white dark:bg-black   ` +
        (toggle ? "w-full lg:w-4/12 " : "w-0 transform translate-x-full ")
      }
    >
      <Nav toggle={toggle} Links={Links} />
    </div>
  );
};
export default Menu;
