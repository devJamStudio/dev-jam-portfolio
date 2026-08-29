import { useEffect, useRef } from "react";

interface Options {
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}

/**
 * Types a list of strings on a loop into the returned ref.
 *
 * Writes textContent directly rather than going through state: at ~18 updates
 * a second a React re-render loop shows up in Lighthouse's blocking time for
 * no benefit, since nothing else on the page reads this value.
 *
 * Render the first string as the element's children so it is not empty before
 * hydration, and for anyone without JavaScript.
 */
export const useTypewriter = (
  strings: string[],
  { typeMs = 55, deleteMs = 25, holdMs = 1600 }: Options = {},
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || strings.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = strings[0];
      return;
    }

    let index = 0;
    let chars = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = strings[index];
      chars += deleting ? -1 : 1;
      el.textContent = current.slice(0, chars);

      let delay = deleting ? deleteMs : typeMs;
      if (!deleting && chars === current.length) {
        deleting = true;
        delay = holdMs;
      } else if (deleting && chars === 0) {
        deleting = false;
        index = (index + 1) % strings.length;
        delay = typeMs;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, holdMs);
    return () => clearTimeout(timer);
  }, [strings, typeMs, deleteMs, holdMs]);

  return ref;
};
