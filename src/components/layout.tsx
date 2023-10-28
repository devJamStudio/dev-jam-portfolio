import React from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header title={""} />
    <main className="flex-1">{children}</main>
  </div>
);
export default Layout;
