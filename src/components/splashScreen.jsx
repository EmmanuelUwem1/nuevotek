"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashScreen({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="absolute h-screen w-screen top-0 left-0 flex flex-col items-center justify-center bg-background z-[2000]">
        <div className="flex flex-col justify-center gap-1 items-center">
          <span className="relative h-24 w-28 sm:h-32 sm:w-36 justify-center items-center">
            <Image
              alt=""
              src={"/Layer_1.png"}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            ></Image>
          </span>

          <div className="relative rounded-full flex overflow-hidden my-4 h-1 w-80 bg-[#DCDCDC]">
            <motion.div
              initial={{ transformOrigin: "left" , scaleX: 0 }}
              animate={{ transformOrigin: "left", scaleX: 100 }}
              transition={{ duration: 500 }}
              className="absolute left-0 top-0 w-full h-full bg-[var(--primary-color)] "
            ></motion.div>
          </div>
          <div className="flex relative justify-center items-center w-52 h-7 sm:w-60 sm:h-9">
            <Image
              alt=""
              src={"/brand name.png"}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            ></Image>
          </div>
          <span className="text-lg font-medium text-[var(--primary-color)] text-center">
            Solutions Limited
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
