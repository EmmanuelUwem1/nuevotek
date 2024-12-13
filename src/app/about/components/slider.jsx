"use client";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slides from "./slides";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function Slider() {
  const swiperRef = useRef();
  return (
    <>
      <Swiper
        slidesPerGroup={1}
        slidesPerGroupSkip={0}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        effect="coverflow"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="flex w-full p-l-4 lg:pl-20 gap-4 relative h-72"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex relative w-96 h-60 overflow-hidden"
          >
            <Image
              src={slide.Image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="relative"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex w-full px-4 justify-between h-fit boder-2 border-red-500 absolute left-0 z-[1000]">
        <span
          className="relative h-12 w-12 flex justify-center items-center cursor-pointer overflow-hidden"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image alt="" src={"/arrow-left.png"} height={56} width={56}></Image>
        </span>
        <span
          className="relative h-12 w-12 cursor-pointer overflow-hidden"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image alt="" src={"/arrow-right.png"} height={56} width={56}></Image>
        </span>
      </div>
    </>
  );
}

export default Slider;
