"use client"
import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CakeData } from '@/context/UseDataContext';


const VarietySlider = ({ margin }) => {
  const { cake, setSlideSelect, setCakeInfo } = useContext(CakeData);
  // console.log("cake from context:", cake);

  if (!cake) {
    return <p className="text-red-500">Loading cakes...</p>;
  }
  // setSlideSelect()
  return (
    <div className={`mx-2 w-[370px] lg:w-[700px] overflow-hidden mt-${margin} `}>
      <Swiper
        pagination={{ type: '' }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {cake.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => {
                setSlideSelect(item.img);
                setCakeInfo(item);
              }}
              className="bg-slate-200 cursor-pointer hover:bg-blue-200 rounded-2xl flex flex-col items-center justify-center 
                   w-[120px] sm:w-[150px]  lg:w-[180px] h-40"
            >
              {/* Image container */}
              <div className="w-full h-3/4 overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              {/* Title */}
              <h1 className="text-center text-black font-bold mt-1">{item.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>



    </div>
  )
}

export default VarietySlider