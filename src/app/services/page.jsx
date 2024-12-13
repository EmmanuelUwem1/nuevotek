import Image from "next/image";
import moreServices from "./components/moreServiceData";

function Services() {
  return (
    <>
      <h2 className="text-black font-medium text-lg lg:text-2xl lg:pl-20 sm:pl-8 pl-4 pt-16">
        Our
      </h2>
      <p className="text-black font-medium text-3xl lg:text-5xl sm:pl-8 lg:pl-20 pl-4 mb-10">
        Services
      </p>
      <div className=" flex justify-center items-center lg:px-20 sm:px-8 px-4 pb-8">
        <div className="relative flex justify-center items-center w-full h-60 md:h-80">
          <Image
            alt=""
            src={"/abstract 3.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:px-20 sm:px-8 px-4 pb-8">
        <div className="flex md:gap-12 flex-wrap justify-center items-center px-8 lg:flex-nowrap">
          <ul>
            <li className="font-medium text-lg list-disc">
              Access to Local, National, and Global Networks
            </li>
            <li className="font-medium text-lg list-disc">
              Dedicated & Shared Rooms Spaces
            </li>
            <li className="font-medium text-lg list-disc">Rack Spaces</li>
            <li className="font-medium text-lg list-disc">
              Fully Backed up AC/DC Power Feeders
            </li>
          </ul>
          <ul>
            <li className="font-medium text-lg list-disc">
              Automatic Power Change Over with No Downtime
            </li>
            <li className="font-medium text-lg list-disc">
              Optimum Cooling & Temperature Control System
            </li>
            <li className="font-medium text-lg list-disc">
              Internet Connections to Tier 1 Carriers{" "}
            </li>
            <li className="font-medium text-lg list-disc">
              Electronic Security Access Control
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-4 pt-20 w-full flex-wrap">
          {moreServices.map((service) => (
            <div
              key={service.title}
              className="flex items-start justify-between w-full md:w-[48%] rounded-lg bg-white border-[1px] border-[#D0D0D0] gap-3 px-6 py-10"
              >
                  <span className="relative flex justify-center items-center h-16 w-16">
                      <Image alt="" src={service.image} height={60} width={60} objectFit="contain" objectPosition="center"></Image>
                  </span>
                  <div className="flex flex-col gap-6 items-start justify-between">
                      <h2 className="font-bold text-2xl text-[var(--primary-color)]">{service.title}</h2>
                      <p className="text-base font-normal text-[var(--brand-black)]">{ service.description}</p>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
