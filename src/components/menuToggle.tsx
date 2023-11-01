import React from "react";

interface MenuToggleProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, setToggle }) => {
  const handleClick = () => {
    console.log(toggle);
    setToggle(!toggle); // Toggle the state when the button is clicked
  };

  return (
    <div
      className={
        `tham tham-e-squeeze tham-w-8 after:bg-white` +
        (toggle ? " tham-active" : "")
      }
      onClick={handleClick}
    >
      <div className="tham-box">
        <div className="tham-inner bg-black dark:bg-white" />
      </div>
    </div>
  );
};

export default MenuToggle;
