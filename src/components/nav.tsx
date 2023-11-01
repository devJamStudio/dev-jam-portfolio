import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
interface NavComponentProps {
  Links: string[];
  toggle: boolean;
}
// tham-active class is added to the tham element when the menu is open
const NavComponent: React.FC<NavComponentProps> = ({ Links, toggle }) => {
  return (
    <div
      className={
        `navbar flex flex-col  text-5xl text-center duration-200   p-4 ` +
        (toggle ? " w-full flex " : "w-0 transform translate-x-full hidden")
      }
    >
      <nav>
        <ul>
          {Links.map((link) => (
            <li className="py-4 hover:text-amber-600  " key={link}>
              <Link to={"/" + link.toLowerCase()}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavComponent;
