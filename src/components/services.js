import React from 'react'
import Image from 'next/image';
import servicesData from '../app/services/components/servicesData';

function Services() {
  return (
    <section className="md:px-20 px-4 py-8 flex flex-col justify-start items-center">
      <p className="text-[#000000] font-styrene font-medium md:text-lg text-base text-center md:w-[80%] mb-12">
        We specialize in delivering essential telecommunications infrastructure,
        offering carrier-neutral network solutions to support the needs of the
        industry.
      </p>

      <div className="flex justify-center lg:justify-start items-start gap-4 flex-wrap w-full">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="flex flex-col justify-normal items-start gap-6 bg-white py-10 px-11 rounded-xl border-[#D0D0D0] border-[1px] w-fit lg:w-[32%] h-80 cursor-pointer cards-hover overflow-hidden"
          >
            <div className="flex flex-col justify-start items-center gap-4">
              <span className="relative flex justify-center items-center h-10 w-10 self-start">
                <Image
                  alt=""
                  src={service.image}
                  height={40}
                  width={40}
                ></Image>
              </span>
              <p className="font-styrene font-bold text-xl text-[var(--primary-color)]">
                {service.title}
              </p>
            </div>
            <p className="font-styrene font-normal text-base leading-5 flex text-justify text-[#000000]">
              {service.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services