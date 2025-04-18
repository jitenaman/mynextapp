"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Quote from "../ui/Quote";
import { sliderData } from "@/Constants/heroSlider";

function HeroSlider() {
  const progressCircle = useRef<HTMLElement>(null);
  const progressContent = useRef<HTMLElement>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current !== null && progressContent.current !== null) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const svgStyle = {
    "--progress": 0,
    "stroke-dashoffset": "calc(125.6 * (1 - var(--progress)))",
    "stroke-dasharray": 125.6,
  } as React.CSSProperties;

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
      className="relative"
    >
      {sliderData.map((slide) => (
        <SwiperSlide key={slide.id} className="relative w-full min-h-[100vh]">
          <Image
            src={slide.url}
            fill={true}
            alt={slide.name}
            priority={true}
            style={{ objectFit: "cover" }}
          />
          {/* overlay */}
          <div className="bg-gradient-to-r from-black/50 via-black/50 via-50% to-transparent to-90% absolute z-[5] pointer-events-none w-[100vw] h-[100vh]" />

          {/* texts */}
          <div className="absolute bottom-20 left-4 lg:bottom-28 md:left-10 text-text-light z-30">
            <Quote key={slide.id} quote={slide.quote} />
            <p className="font-poppins font-medium text-[18px] md:text-[24px] max-w-[500px] mt-5">
              {slide.para}
            </p>
            <p className="font-bold text-[32px] md:text-[40px] mt-5">
              {slide.caption}
            </p>
          </div>
        </SwiperSlide>
      ))}
      {/* slider count */}
      <div
        className="absolute right-4 bottom-4 z-10 w-12 h-12 flex items-center justify-center text-white font-medium"
        slot="container-end"
      >
        <svg
          viewBox="0 0 48 48"
          //@ts-ignore
          ref={progressCircle}
          style={svgStyle}
          className="absolute left-0 top-0 z-10 w-full h-full stroke-white stroke-[4px] -rotate-90 fill-none"
        >
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
}

export default HeroSlider;
