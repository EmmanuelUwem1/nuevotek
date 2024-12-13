"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function PhoneNumberInput() {
  return (
    <input
      type="text"
      id="phone"
      name="phone"
      placeholder="Phone Number"
      className="bg-[#F4F4F4] h-16 flex w-full rounded-sm px-4 focus:border-[1px] focus:border-[var(--primary-color)]"
      onKeyDown={(e) => {
        const allowedKeys = [
          "Backspace",
          "ArrowLeft",
          "ArrowRight",
          "Delete",
          "Tab",
          "Enter",
          "+",
          "-",
          "_",
        ];
        if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
          e.preventDefault();
        }
      }}
      onPaste={(e) => {
        const paste = (e.clipboardData || window.clipboardData).getData("text");
        if (!/^[0-9+\-_]*$/.test(paste)) {
          e.preventDefault();
        }
      }}
    />
  );
}

function Consult() {
  return (
    <section className="flex md:pl-20 sm:pl-8 flex-wrap pl-4 w-full py-16">
      <div className="flex flex-col w-full md:w-1/2 justify-start items-start h-full">
        <h2 className="font-styrene font-medium text-4xl lg:text-6xl text-[var(--primary-color)]">
          Get Free
        </h2>
        <h2 className="font-styrene font-medium text-4xl lg:text-6xl text-[var(--primary-color)]">
          Consultation
        </h2>
        <p className="text-black font-styrene font-normal text-base w-[70%] mt-2">
          Feel free to reach out using the information below or submit your
          request here.
        </p>
        <form className="flex justify-normal flex-col items-center w-full gap-4 pr-4 mt-8">
          <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name"
              className="bg-[#F4F4F4] h-16 flex w-full rounded-sm px-4 focus:border-[1px] focus:border-[var(--primary-color)]"
            />
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
              className="bg-[#F4F4F4] h-16 flex w-full rounded-sm px-4 focus:border-[1px] focus:border-[var(--primary-color)]"
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="bg-[#F4F4F4] h-16 flex w-full rounded-sm px-4 focus:border-[1px] focus:border-[var(--primary-color)]"
            />
            <PhoneNumberInput />
          </div>
          <div className="flex w-full">
            <textarea
              name="case"
              id="case"
              placeholder="Case Details"
              className="bg-[#F4F4F4] h-72 w-full rounded-sm p-4 focus:border-[1px] focus:border-[var(--primary-color)]"
            ></textarea>
          </div>
          <button className="font-styrene flex w-full justify-center items-center font-medium text-base bg-[var(--primary-color)] text-[#FFFFFF] px-8 py-3 transition-all hover:opacity-80">
            Send a Message
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center w-1/2 relative h-auto">
        <Image
          src={"/happy business.png"}
          alt=""
          layout="fill"
          className="z-0"
        ></Image>
      </div>
    </section>
  );
}

export default Consult;
