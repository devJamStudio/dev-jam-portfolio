import React from "react";
import Nav from "./nav";
import type { NavLink } from "./nav";
import { useCopy, usePath } from "../i18n/LocaleContext";

/** The site's pages, shared by the desktop header and the mobile menu. */
export const useNavLinks = (): NavLink[] => {
  const copy = useCopy();
  const path = usePath();
  return [
    { label: copy.nav.offer, to: path("/offer") },
    { label: copy.nav.stack, to: path("/tech-stack") },
    { label: copy.nav.portfolio, to: path("/portfolio") },
    { label: copy.nav.about, to: path("/about") },
    { label: copy.nav.contact, to: path("/contact") },
  ];
};

interface MenuProps {
  toggle: boolean;
}

// Mobile only (the header shows the links inline from lg). Full viewport
// height, pinned to the viewport and sliding in under the sticky header
// (z-30). pt-24 / md:pt-28 clear the header (84px / 110px tall).
const Menu: React.FC<MenuProps> = ({ toggle }) => (
  <div
    className={
      "lg:hidden fixed inset-y-0 right-0 z-20 w-full pt-24 md:pt-28 flex justify-center bg-white dark:bg-black transition-[transform,visibility] duration-300 motion-reduce:transition-none " +
      (toggle ? "translate-x-0 visible" : "translate-x-full invisible")
    }
  >
    <Nav toggle={toggle} Links={useNavLinks()} />
  </div>
);

export default Menu;
