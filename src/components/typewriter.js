import React from "react";
import Typewriter from "typewriter-effect";

const Typewrite = () => {
  <div>
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello World!")
          .callFunction(() => {})
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {})
          .start();
      }}
    />
  </div>;
};

export default Typewrite;
