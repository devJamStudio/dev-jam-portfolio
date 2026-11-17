import React, { useEffect, useState } from "react";
import Header from "./header";
import Menu from "./menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  // Escape closes the menu, like any other overlay.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // min-h-screen, not calc(100vh - header): the header sits inside this
  // container, so subtracting its height made the page end short of the fold
  // and anything pushed to the bottom stopped above it. main is a flex column
  // so a page can use mt-auto to sit something on the ground.
  return (
    <div className="flex flex-col min-h-screen">
      <Header toggle={open} setToggle={setOpen} />
      <main className="flex-1 p-4 md:p-6 flex flex-col">{children}</main>
      <Menu toggle={open} />
    </div>
  );
};

export default Layout;
