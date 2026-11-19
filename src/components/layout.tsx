import React, { useEffect, useState } from "react";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";

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
  // container, so subtracting its height made the page end short of the fold.
  // main is a flex column so a page can use mt-auto to sit something on the
  // ground; it is capped at 7xl so wide screens get margins, not 2m lines.
  return (
    <div className="flex flex-col min-h-screen">
      <Header toggle={open} setToggle={setOpen} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 flex flex-col">
        {children}
      </main>
      <Footer />
      <Menu toggle={open} />
    </div>
  );
};

export default Layout;
