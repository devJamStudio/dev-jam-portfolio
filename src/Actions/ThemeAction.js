export const setDarkTheme = (theme) => {
  console.log("Dark theme action called");
  document.documentElement.classList.add("dark");
  localStorage.setItem("dark-mode", true);
  return {
    type: "dark",
    payload: theme,
  };
};
export const setLightTheme = (theme) => {
  console.log("Light theme action called");
  document.documentElement.classList.remove("dark");
  localStorage.setItem("light-mode", false);
  return {
    type: "light",
    payload: theme,
  };
};
