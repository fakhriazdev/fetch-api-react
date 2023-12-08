import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useFetchTesti } from '@/app/features/testimonies/useFechTesti';
const Testimonial = () => {
  const { data: testimonies, isLoading } = useFetchTesti();
  return (
    <>
      <section className="relative max-w-5xl mx-auto mb-32">
        <div className="flex justify-center mb-16">
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-bold text-4xl tracking-wider">Testimonial</h1>
            <p className="text-[14px] text-gray-600">My client saying</p>
          </div>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonies.map((testimonie) => {
            return (
              <SwiperSlide>
                <div className="relative w-full h-60 pb-10">
                  <div className="h-48 bg-white shadow-xl rounded-xl p-6 relative z-20">
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="h-20 text-gray-500 mb-2 text-sm border-l-4 border-red-400 px-2">
                          {testimonie.comment}
                        </p>
                      </div>
                      <div className="flex justify-start gap-2">
                        <span className="h-10 w-10 rounded-full bg-black my-auto"></span>
                        <div className="flex flex-col">
                          <h6 className="text-gray-900 text-lg">
                            {testimonie.name}
                          </h6>
                          <h6 className="text-gray-500 text-sm">
                            {testimonie.role}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
export default Testimonial;
