import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-row gap-10 mt-14 pb-10">
      <div className="">
        <Image src="/linkedin-logo.png" width="50" height="50" />
      </div>
      <div className="">
        <Image src="/github-logo.png" width="50" height="50" />
      </div>
    </div>
  );
};

export default Footer;
