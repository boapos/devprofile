import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-row gap-10 pb-10 mt-14">
      <Link
        href="https://www.linkedin.com/in/bruce-oliver-apos-51b3381b3/"
        passHref={true}
      >
        <a target="_blank">
          <Image
            alt="linkedin"
            src="/linkedin-logo.png"
            width="50"
            height="50"
          />
        </a>
      </Link>

      <Link href="https://github.com/boapos" passHref={true}>
        <a target="_blank">
          <Image alt="github" src="/github-logo.png" width="50" height="50" />
        </a>
      </Link>
    </div>
  );
};

export default Footer;
