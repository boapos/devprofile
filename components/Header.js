import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <h1 className="font-bold leading-none tracking-tight text-center text-8xl drop-shadow-lg font-poppins lg:text-heading">
        bruce apos
      </h1>
      <div className="mt-10 ">
        <Image alt="myface" src="/bob.png" width="150" height="150" />
      </div>
    </div>
  );
};

export default Header;
