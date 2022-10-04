import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" relative left-7">
      <div className=" absolute top-32 left-36">
        <Image src="/bob.png" width="71" height="71" />
      </div>
      <h1 className=" text-heading font-bold drop-shadow-lg font-poppins tracking-tighter">
        Bob<span className=" font-light text-white">devs</span>
      </h1>
    </div>
  );
};

export default Header;
