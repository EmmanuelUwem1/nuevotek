import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col justify-star w-full px-4 sm:px-8 md:px-20">
      <div className="bg-[#D8D8D8] w-full h-[2px]"></div>
      <div className="flex justify-between items-center py-4 sm:py-0 sm:gap-4 sm:h-16 flex-to-col">
        <p className="font-styrene font-medium text-[0.6rem] md:text-[0.8rem]">
          Copyright © {new Date().getFullYear()} Nuevotek. All Rights Reserved
        </p>
        <div className="flex justify-between items-center gap-7 flex-to-col">
          <Link
            href={"/"}
            className="font-styrene font-medium text-[0.6rem] md:text-[0.8rem]"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/"}
            className="font-styrene font-medium text-[0.6rem] md:text-[0.8rem]"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
