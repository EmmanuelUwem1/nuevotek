"use client"
import Slider from "./components/slider";
import Image from "next/image";
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:.2}}>
      <h2 className="text-black font-medium text-lg lg:text-2xl lg:pl-20 sm:pl-8 pl-4 pt-16">
        About
      </h2>
      <p className="text-black font-medium text-3xl lg:text-5xl sm:pl-8 lg:pl-20 pl-4 mb-16">
        Nuevotek
      </p>
      <div className="flex justify-start items-center pl-0 sm:pl-8 lg:pl-20">
        <Slider />
      </div>
      <div className="flex items-center justify-center w-full">
        <p className="px-4 lg:px-20 sm:px-8 md:w-[80%] font-medium text-base py-12 text-center">
          We offer a wide range of services designed to support businesses of
          all sizes in building, managing, and scaling their telecommunications
          infrastructures.
        </p>
      </div>
      <div className="flex px-4 lg:px-20 sm:px-8 py-8 gap-8 justify-between items-center w-full flex-wrap md:flex-nowrap">
        <div className=" py-4 flex flex-col items-center justify-start pt-4 w-full md:w-[49%]">
          <span className="flex justify-start items-center pb-12 gap-2 text-left self-start">
            <p className="font-medium text-3xl text-[var(--primary-color)]">
              Our
            </p>
            <p className="text-4xl font-bold text-[var(--primary-color)] relative">
              Mission
              <span className="absolute bottom-[-.5rem] w-32 h-3 flex">
                <Image
                  alt=""
                  src={"/Vector 2.png"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  className="relative"
                ></Image>
              </span>
            </p>
          </span>
          <p className="font-normal text-base text-justify  ">
            Our mission is to drive digital transformation and growth for our
            clients by providing innovative solutions and expert advice that
            help them stay ahead of the curve. We are committed to delivering
            exceptional service and support to our clients, with a focus on
            innovation, reliability, and customer-centricity.
          </p>
        </div>

        <div className="relative flex items-center justify-center w-full md:w-[49%] h-60">
          <Image
            alt=""
            src={"/Frame 5.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          ></Image>
        </div>
      </div>

      <div className="flex px-4 lg:px-20 sm:px-8 py-8  justify-center items-center w-full">
        <div className="flex relative justify-between items-center flex-col bg-[#25D366] h-fit py-16 px-8 lg:w-80% w-full rounded-2xl">
          <span className="absolute left-4 sm:left-8 lg:left-20 top-0 h-full w-28">
            <Image alt="" src={"/Vector 3.png"} layout="fill" objectFit="contain" objectPosition="center"></Image>
          </span>
          <span className="absolute right-4 bottom-0 h-14 w-14">
            <Image alt="" src={"/Polygon 1.png"} layout="fill" objectFit="contain" objectPosition="center"></Image>
          </span>
          <span className="flex justify-center w-fill text-center items-center pb-12 gap-2">
            <p className="font-medium text-3xl text-[var(--primary-color)]">
              Our
            </p>
            <p className="text-4xl font-bold text-[var(--primary-color)] relative">
              Business
              <span className="absolute bottom-[-.5rem] w-32 h-3 flex">
                <Image
                  alt=""
                  src={"/Vector 2.png"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  className="relative"
                ></Image>
              </span>
            </p>
          </span>
            <p className="font-normal text-base text-center md:w-[80%] text-[var(--primary-color)] ">
              We are also committed to conducting our business in a responsible
              and sustainable manner, with a focus on minimizing our
              environmental impact, promoting ethical business practices, and
              giving back to the communities in which we operate.
            </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
