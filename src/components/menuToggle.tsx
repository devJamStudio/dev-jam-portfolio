import React from "react";

interface MenuToggleProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

// A real <button>: the nav lives behind this toggle, so a div with onClick
// left keyboard and screen-reader users with no way into the menu.
const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, setToggle }) => (
  <button
    type="button"
    aria-label="Toggle menu"
    aria-expanded={toggle}
    className={
      `tham tham-e-squeeze tham-w-8 after:bg-white` +
      (toggle ? " tham-active" : "")
    }
    onClick={() => setToggle(!toggle)}
  >
    <span className="tham-box">
      <span className="tham-inner bg-black dark:bg-white" />
    </span>
  </button>
);

export default MenuToggle;
