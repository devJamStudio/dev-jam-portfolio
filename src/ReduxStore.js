import { createStore } from "redux";
import Reducer from "../src/Reducers/ThemeReducer";
import { setLightTheme, setDarkTheme } from "./Actions/ThemeAction";
var theme = "light";
// Define an initial state object
const initialState = {
  theme: theme, // Initialize with a default theme
};

const isBrowser = typeof window !== "undefined";
// Create a Redux store with the initial state
const store = createStore(Reducer, {
  ...initialState,
  theme: theme, // Set the theme based on user preferences
});

if (isBrowser) {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDarkTheme) {
    store.dispatch(setDarkTheme("dark"));
  } else {
    store.dispatch(setLightTheme("light"));
  }
}

export default store;
