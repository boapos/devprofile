import React from "react";
import { Typewriter } from "react-simple-typewriter";

const SubHeader = () => {
  return (
    <div className="relative mt-10 bottom-4">
      <h1 className="inline-block text-4xl tracking-tight lg:text-5xl font-robotoslab">
        Does{" "}
        <span className="font-bold text-teal-400 drop-shadow-sm">
          <Typewriter
            words={["web.", "mobile apps.", "APIs.", "AWS Cloud."]}
            loop={false}
            cursor
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>
      <p className="mt-5 text-3xl font-light tracking-tight font-robotoslab">
        Do you have project ideas in mind? Hit me up ;&#41;
      </p>
    </div>
  );
};

export default SubHeader;
