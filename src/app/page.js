import Image from "next/image";
import Link from "next/link";
import Services from "@/components/services";
import Consult from "@/components/consult";

export default function Home() {
  return (
    <>
      <section className="md:h-screen h-[90svh] relative flex w-full bg-slate-800 object-center overflow-hidden">
        <Image
          src={"/hero bg.png"}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 absolute object-fill"
        ></Image>
        <div className="flex flex-col gap-8 w-full lg:w-1/2 justify-center pl-4 lg:pl-20 pr-8 items-start h-full bg-[#00000094] z-10">
          <p className="font-styrene font-medium text-3xl lg:text-5xl text-left text-[#FFFFFF] z-20">
            Enabling Connectivity with Reliable, Neutral Infrastructure.
          </p>
          <p className="font-styrene lg:text-2xl text-lg font-medium text-left text-[#FFFFFF] z-20">
            Delivering world-class telecommunications solutions that support the
            future of industries across the globe.
          </p>

          <Link
            href={"/"}
            className="font-styrene font-medium text-base bg-[#07E02B] transition-all hover:bg-white hover:text-[#07E02B] text-[#FFFFFF] px-8 py-3 "
          >
            See all Solutions
          </Link>
        </div>
        <span className=" flex justify-center items-center overflow-hidden h-12 w-12 md:h-20 md:w-20 fixed md:bottom-8 bottom-4 md:right-10 right-5 z-[1000]">
          <Link alt={"whatsApp"} href="#">
            <Image
              alt="WhatsApp"
              src={"/whatsapp.png"}
              height={84}
              width={84}
              layout="contain"
            ></Image>
          </Link>
        </span>
      </section>
      <Services />
      <section className="flex flex-wrap lg:flex-nowrap gap-8 justify-center items-center w-full mt-8 md:pr-20">
        <div className="flex justify-center items-center w-full lg:w-1/2 h-96 relative">
          <Image alt="" src={"/abstract.png"} layout="fill"></Image>
        </div>
        <div className="flex flex-col justify-center items-start px-4 lg:px-0 w-full lg:w-1/2 gap-3">
          <p className="font-styrene font-bold text-base text-[var(--primary-color)] mb-2">
            WHY CHOOSE NEUVOTEK?
          </p>

          <p className="text-black font-styrene font-bold text-2xl">
            Customized solutions designed to surpass expectations by addressing
            specific business needs and objectives.
          </p>

          <p className="font-styrene font-normal text-black text-base">
            We strive to provide outstanding service and support, emphasizing
            innovation, reliability, and customer focus. Our culture centers on
            teamwork, creativity, and excellence, valuing our team members as
            our greatest strength.
          </p>

          <Link
            href={"/"}
            className="font-styrene font-medium text-base bg-[var(--primary-color)] transition-all hover:bg-black text-[#FFFFFF] px-8 py-3"
          >
            Send a Message
          </Link>
        </div>
      </section>
      <Consult />
    </>
  );
}
