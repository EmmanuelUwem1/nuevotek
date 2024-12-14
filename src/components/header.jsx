"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Twirl as Hamburger } from "hamburger-react";

function Header() {
  const pathname = usePathname();
  const [navMenuOpen, setNavmenu] = useState(false);



  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex w-full h-fit flex-col sticky top-[-2rem] shadow-sm md:top-[-3rem] z-[2000] bg-[var(--background)]">
      <div className="flex gap-4 w-full bg-[var(--primary-color)] h-8 md:h-12 justify-end px-4 lg:px-20 items-center">
        <span className="flex justify-center items-center gap-1 w-fit">
          <span className="sm:h-5 sm:w-5 w-3 h-3 flex justify-center items-center relative">
            <Image
              alt=""
              src={"/sms.png"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            ></Image>
          </span>
          <a
            href="mailto:nuevoteksolutions@gmail.com"
            className="text-white font-styrene sm:text-sm font-medium text-[0.6rem]"
          >
            nuevoteksolutions@gmail.com
          </a>
        </span>
        <span className="flex justify-center items-center w-fit text-white gap-1 text-[0.6rem] sm:text-base text-right">
          <span className="sm:h-5 sm:w-5 h-3 w-3 flex justify-center items-center relative">
            <Image
              alt=""
              src={"/call-calling.png"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            ></Image>
          </span>
          <a
            href="tel:+23408101344170"
            className="text-white font-styrene font-medium text-[0.6rem] sm:text-base"
          >
            08101344170
          </a>
          {" , "}
          <a
            href="tel:+23407080903902"
            className="text-white font-styrene font-medium text-[0.6rem] sm:text-base"
          >
            07080903902
          </a>
        </span>
      </div>
      <div className="flex w-full justify-between items-center px-4 sm:px-8 lg:px-20 h-14 md:h-20">
        <Link
          href={"/"}
          className={`font-styrene font-bold text-2xl relative w-fit h-fit`}
        >
          <Image
            alt="logo"
            src={"/Logo full.png"}
            height={36}
            width={150}
          ></Image>
        </Link>
        <nav
          className={`flex lg:justify-between items-center gap-16 lg:flex ${
            navMenuOpen ? "open" : ""
          }`}
        >
          {navLinks.map((navLink) => (
            <Link
              key={navLink.title}
              href={navLink.href}
              className={`font-medium text-lg relative ${
                pathname === navLink.href
                  ? "active lg:text-[var(--primary-color)]"
                  : "bottom"
              }`}
              onClick={() => setNavmenu(false)}
            >
              {navLink.title}
            </Link>
          ))}

          <Link
            href={"#"}
            className={`font-styrene font-medium text-base bg-[var(--primary-color)] text-[#FFFFFF] px-8 py-3 rounded transition-all hover:opacity-80 ${
              navMenuOpen ? "bg-black" : ""
            }`}
            onClick={() => setNavmenu(false)}
          >
            Our Brochure
          </Link>
        </nav>
        <div
          className={`flex right-0 lg:hidden p-0 m-0 z-[2000] ${
            navMenuOpen ? "fixed right-2 top-[5rem] md:top-[7rem]" : "absolute"
          }`}
        >
          <Hamburger
            size={25}
            direction="left"
            duration={0.5}
            color={`${navMenuOpen ? "white" : "var(--primary-color)"}`}
            className={``}
            toggled={navMenuOpen}
            toggle={() => setNavmenu(!navMenuOpen)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
