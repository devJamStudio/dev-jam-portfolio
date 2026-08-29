import { useEffect, useRef, useState } from "react";

interface Options {
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}

/**
 * Types a list of strings on a loop. Replaces typewriter-effect, which pulled
 * in its own runtime and rendered a cursor element that moved on every
 * keystroke — that alone was 0.152 of the page's layout shift.
 *
 * Respects prefers-reduced-motion by showing the first string and stopping.
 */
export const useTypewriter = (
  strings: string[],
  { typeMs = 55, deleteMs = 25, holdMs = 1600 }: Options = {},
): string => {
  const [text, setText] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!strings.length) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setText(strings[0]);
      return;
    }

    let index = 0;
    let chars = 0;
    let deleting = false;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const current = strings[index];
      chars += deleting ? -1 : 1;
      setText(current.slice(0, chars));

      let delay = deleting ? deleteMs : typeMs;
      if (!deleting && chars === current.length) {
        deleting = true;
        delay = holdMs;
      } else if (deleting && chars === 0) {
        deleting = false;
        index = (index + 1) % strings.length;
        delay = typeMs;
      }
      timer.current = setTimeout(tick, delay);
    };

    timer.current = setTimeout(tick, typeMs);
    return () => {
      cancelled = true;
      if (timer.current) clearTimeout(timer.current);
    };
  }, [strings, typeMs, deleteMs, holdMs]);

  return text;
};
