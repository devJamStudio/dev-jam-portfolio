import React, { useState } from "react";
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

  // min-h-screen, not calc(100vh - header): the header sits inside this
  // container, so subtracting its height made the page end short of the fold
  // and anything pushed to the bottom stopped above it. main is a flex column
  // so a page can use mt-auto to sit something on the ground.
  return (
    <div className="flex flex-col min-h-screen">
      <Header toggle={toggle} setToggle={toggleMenu} />
      <div className="flex flex-1 flex-row">
        <main className="flex-1 p-8 flex flex-col">{children}</main>
        <Menu toggle={toggle} />
      </div>
    </div>
  );
};

export default Layout;
