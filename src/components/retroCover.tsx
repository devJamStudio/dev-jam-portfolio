import React from "react";
import Logo from "./logo";

interface RetroCoverProps {
  name: string;
  /** Extra classes for the frame, e.g. an aspect ratio. */
  className?: string;
}

// Stand-in for a project with no screenshot: a night-to-sunset panel with
// scanlines, the studio logo faded into the background and the project name
// on top. Same in both themes, like a title card. Styles: .retro-cover.
const RetroCover: React.FC<RetroCoverProps> = ({ name, className = "" }) => (
  <div
    className={`retro-cover relative overflow-hidden flex items-center justify-center ${className}`}
  >
    <Logo
      className="absolute w-[70%] h-auto fill-white opacity-[0.14] -rotate-6"
      width="116"
      height="76"
    />
    <span className="retro-cover__name relative font-ocr text-2xl sm:text-3xl px-6 text-center">
      {name}
    </span>
  </div>
);

export default RetroCover;
