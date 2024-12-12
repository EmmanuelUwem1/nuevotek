"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Twirl as Hamburger } from "hamburger-react";

function Header() {
  const path = useParams();
  const [navMenuOpen, setNavmenu] = useState(false);
  function toggleMenu() {
    setNavmenu(!navMenuOpen);
  }
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <header className="flex w-full h-fit flex-col">
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
            href="mailto:nuevoteksolutions@gmail.com "
            className="text-white font-styrene sm:text-sm font-medium text-[0.6rem]"
          >
            nuevoteksolutions@gmail.com{" "}
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
      <div className="flex w-full justify-between items-center px-4 md:px-20 h-12 md:h-20">
        <Link
          href={"/"}
          className={`font-styrene font-bold text-2xl relative w-36 h-9`}
        >
          <Image
            alt="logo"
            src={"/Logo full.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
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
              className={`font-styrene font-medium text-lg relative bottom ${
                navLink.href == path ? "active" : ""
              }`}
            >
              {navLink.title}
            </Link>
          ))}

          <Link
            href={"#"}
            className="font-styrene font-medium text-base bg-[var(--primary-color)] text-[#FFFFFF] px-8 py-3 rounded transition-all hover:opacity-80"
          >
            Our Brochure
          </Link>
        </nav>
        <div className="flex absolute right-0 lg:hidden p-0 m-0 z-[2000]">
          <Hamburger
            size={25}
            direction="left"
            duration={0.5}
            color="black"
            className=""
            onToggle={(toggled) => {
              if (toggled) {
                toggleMenu();
              } else {
                toggleMenu();
              }
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
