import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLightTheme, setDarkTheme } from "../Actions/ThemeAction";
import { useState } from "react"; // Import the action
import ToggleSwitch from "./toggleSwitch";

const DarkModeSwitch = () => {
  const DarkModeSwitchData = useSelector((state) => state.DarkModeSwitchData);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(theme === "dark");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const newTheme = darkMode ? "light" : "dark";
    handleThemeChange(newTheme);
  };

  const updateTheme = (newTheme) => {
    if (newTheme === "dark") {
      dispatch(setDarkTheme("dark"));
    } else {
      dispatch(setLightTheme("light"));
    }
  };

  const handleThemeChange = (newTheme) => {
    updateTheme(newTheme);
  };

  return <ToggleSwitch checked={darkMode} onChange={toggleTheme} />;
};
export default DarkModeSwitch;
