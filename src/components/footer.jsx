import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col justify-star w-full px-4 md:px-20">
      <div className="bg-[#D8D8D8] w-full h-[2px]"></div>
      <div className="flex justify-between items-center gap-4 h-16">
        <p className="font-styrene font-medium text-[0.6rem] md:text-lg">
          Copyright © 2024 Neuvotech. All Rights Reserved
        </p>
        <div className="flex justify-between items-center gap-7">
          <Link href={"/"} className="font-styrene font-medium text-[0.6rem] md:text-lg">
            Privacy Policy
          </Link>
          <Link href={"/"} className="font-styrene font-medium text-[0.6rem] md:text-lg">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
