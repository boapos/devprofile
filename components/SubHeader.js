import React from "react";
import { Typewriter } from "react-simple-typewriter";

const SubHeader = () => {
  return (
    <div className="relative left-2 bottom-4">
      <h1 className="inline-block text-5xl tracking-tight font-robotoslab">
        Does{" "}
        <span className="font-bold text-teal-400 drop-shadow-sm">
          <Typewriter
            words={["ReactJS", "Flutter", "Spring Boot", "AWS Cloud"]}
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
