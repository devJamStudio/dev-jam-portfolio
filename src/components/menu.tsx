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

  // Full viewport height, pinned to the viewport and sliding in under the
  // sticky header (z-30). It used to be fixed with no `top`, so it kept the
  // header's offset after scrolling: a gap above it, and its bottom past the
  // fold. pt-24 / md:pt-28 clear the header (84px / 110px tall).
  return (
    <div
      className={
        "fixed inset-y-0 right-0 z-20 w-full lg:w-4/12 pt-24 md:pt-28 flex justify-center bg-white dark:bg-black border-black dark:border-white lg:border-l-2 transition-[transform,visibility] duration-300 motion-reduce:transition-none " +
        (toggle ? "translate-x-0 visible" : "translate-x-full invisible")
      }
    >
      <Nav toggle={toggle} Links={Links} />
    </div>
  );
};
export default Menu;
