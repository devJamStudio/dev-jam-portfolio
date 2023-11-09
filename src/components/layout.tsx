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
    <div className="flex flex-col min-h-[calc(100vh-8.875rem)]">
      <Header toggle={toggle} setToggle={toggleMenu} />
      <div className="flex h-full flex-row ">
        <main className="flex-1 p-8">{children}</main>
        <Menu toggle={toggle} />
      </div>
    </div>
  );
};

export default Layout;
