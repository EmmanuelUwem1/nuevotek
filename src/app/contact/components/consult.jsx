import Form from "../form";
import Image from "next/image";
function Consult(){
  return (
    <section className="flex md:pl-20 sm:pl-8 flex-wrap-reverse pl-4 w-full py-16">
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
        <Form />
      </div>
      <div className="flex justify-center items-center sm:w-1/2 w-full relative sm:h-auto sm:mb-0 mb-8 h-96">
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
