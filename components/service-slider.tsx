"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { serviceData } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  btnText: string;
};

export const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{ 768: { slidesPerView: 2 } }}
      className="serviceSlider min-h-170 xl:w-[70vw]"
    >
      {serviceData.map(({ id, title, description, image }) => (
        <SwiperSlide
          key={id}
          className="border border-primary/20 bg-cream min-h-[580px] rounded-[66px] py-16 px-8"
        >
          <Image
            src={image}
            alt={`${title} image`}
            width={120}
            height={120}
            className="mb-8"
          />
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8">
            {title}
          </p>
          <p className="text-lg mb-10 line-clamp-4">{description}</p>
          <button className="btn btn-primary">Learn more</button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
