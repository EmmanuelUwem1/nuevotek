"use client"
import Image from "next/image";
import GetInTouch from "./components/getInTouch";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full h-56 mb-4 md:h-64 relative flex flex-col justify-center items-center ">
        <Image
          alt=""
          src={"/Background.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        ></Image>
        <div className="relative flex flex-col justify-center items-center h-full w-full sm:w-[80%] md:w-[70%] lg:w-[60%]  gap-4 px-4 sm:px-8 lg:px-20">
          <span className="font-normal text-base text-black text-center">
            Contact Us
          </span>
          <span className="font-bold text-2xl text-[var(--primary-color)] text-center">
            Schedule a free consultation with our expert team to address your
            challenges.
          </span>
        </div>
      </div>
      <div className="flex w-full px-4 sm:px-8 lg:px-20 justify-center items-center">
        <GetInTouch />
      </div>
    </motion.div>
  );
}

export default Contact;
