import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center ">
      <h1 className="font-bold tracking-tight text-heading drop-shadow-lg font-poppins">
        bruce apos
      </h1>
      <div className="">
        <Image src="/bob.png" width="150" height="150" />
      </div>
    </div>
  );
};

export default Header;
