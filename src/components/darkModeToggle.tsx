import React from "react";
import ToggleSwitch from "./toggleSwitch";
import { useTheme } from "../hooks/useTheme";

const DarkModeToggle: React.FC = () => {
  const { dark, toggle } = useTheme();

  return (
    <ToggleSwitch checked={dark} onChange={toggle} label="Toggle dark mode" />
  );
};

export default DarkModeToggle;
