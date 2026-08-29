import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/**
 * Dark mode without a store. The class is already on <html> before first paint
 * (see the inline script in gatsby-ssr.jsx), so this only has to read it back
 * after hydration and flip it on demand.
 */
export const useTheme = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Safari in private mode throws on write; the toggle still works.
    }
  };

  return { dark, toggle };
};
