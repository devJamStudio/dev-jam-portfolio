import React, { useState } from "react";
import Logo from "./logo";
import Header from "./header";
import Menu from "./menu";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggle={toggle} setToggle={toggleMenu} />
      <div className="flex h-full flex-row px-8">
        <main className="flex-1">{children}</main>
        <Menu toggle={toggle} setToggle={toggleMenu} />
      </div>
    </div>
  );
};

export default Layout;
