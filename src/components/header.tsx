import * as React from "react";
import { Link } from "gatsby";
import Logo from "./logo";

interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => (
  <div className="navbar flex flex-col bg-green-400 p-4">
    <Logo className="fill-black dark:fill-white" />
  </div>
);
export default Header;
