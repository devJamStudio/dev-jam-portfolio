import React from "react";
import { Link } from "gatsby";

export interface NavLink {
  label: string;
  to: string;
}

interface NavComponentProps {
  Links: NavLink[];
  toggle: boolean;
}

const NavComponent: React.FC<NavComponentProps> = ({ Links, toggle }) => {
  return (
    <div
      className={
        `navbar flex flex-col  text-5xl text-center duration-200    p-4 ` +
        (toggle ? " w-full flex " : "w-0 transform translate-x-full hidden")
      }
    >
      <nav>
        <ul>
          {Links.map((link) => (
            <li
              className="py-4 hover:text-teal-500  dark:hover:text-amber-600  "
              key={link.to}
            >
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavComponent;
