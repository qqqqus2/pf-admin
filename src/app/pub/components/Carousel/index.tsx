"use client";

import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface CarouselProps {
  className?: string;
}

export default function Carousel({ className }: CarouselProps) {
  const [show, setShow] = useState(1);

  return (
    <div className={`carousel-basic ${className ? className : ""}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          type: "fraction",
        }}
      >
        <SwiperSlide>
          <img src="https://placehold.co/536x360/22D663/FFFFFF?text=Image+01.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/536x360/23252A/FFFFFF?text=Image+02.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/536x360/14B6F7/FFFFFF?text=Image+03.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/536x360/8A99AF/FFFFFF?text=Image+04.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
