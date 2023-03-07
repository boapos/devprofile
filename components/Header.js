import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row">
      <h1 className="font-bold tracking-tight text-8xl drop-shadow-lg font-poppins text-center leading-none lg:text-heading">
        bruce apos
      </h1>
      <div className=" mt-10">
        <Image src="/bob.png" width="150" height="150" />
      </div>
    </div>
  );
};

export default Header;
