// Import necessary Redux functions and your Reducer
import { createStore } from "redux";
import Reducer from "../src/Reducers/ThemeReducer";
// Import userTheme function to fetch user preferences (returns a boolean)

// Define an initial state object
const initialState = {
  counterData: 1,
  theme: "light", // Initialize with a default theme
};

// Fetch user preferences (true for dark mode, false for light mode)
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkTheme) {
  var theme = "dark";
  document.documentElement.classList.add("dark");
  localStorage.setItem("dark-mode", true);
} else {
  var theme = "light";
}

// Create a Redux store with the initial state
const store = createStore(Reducer, {
  ...initialState,
  theme: theme, // Set the theme based on user preferences
});
console.log("Initial Redux State:", store.getState());

export default store;
