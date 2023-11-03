"use client";
import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import img from '/starter-code/assets/crew/image-mark-shuttleworth.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css"
import data from "../../data/data.json";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";


const Carousel = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);
  return (
    <div className="Carousel text-white flex  flex-col  ">
      <div>
        <h1 data-aos="fade-right" className="w-[80%]  mt-12  mx-auto text-[16px] sm:text-[20px] lg:text-[28px] font-barlow break-words font-normal text-white tracking-[4.72px]">
          <span className="text-headerLinks/50">01</span> Meet your crew 
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // pagination={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel w-[90%] sm:w-[80%]   mx-auto    "
      >
        {data?.crew?.map((val, i) => {
          return (
            <SwiperSlide key={i} className="">
              <div className="  w-full h-auto lg:h-[calc(100vh-164px)] flex flex-col-reverse sm:flex-col justify-end  gap-12 lg:gap-0 lg:justify-end lg:flex-row   ">
                <div className="relative mt-0 sm:mt-8 lg:w-[55%] text-center lg:text-left  lg:self-center">
                  <h1 data-aos="fade-right" className="  text-[16px]  md:text-[24px] lg:text-[32px] font-normal font-bellefair uppercase break-words text-white/60">
                    {val.role}
                  </h1>
                  <h2 data-aos="fade-right" data-aos-delay="100" className="my-4 text-[24px]   md:text-[40px]  lg:text-[56px] font-normal font-bellefair uppercase break-words text-white">
                    {val.name}
                  </h2>
                  <p data-aos="fade-right" data-aos-delay="200" className="mx-auto lg:mx-0  text-[15px]   lg:max-w-[444px] md:text-[16px] lg:text-[18px] font-barlow_c break-words leading-[32px] text-skyBlue font-normal">
                    {val.bio}
                  </p>
                </div>

                <div className="lg:w-[45%] flex  ">
                  <img data-aos="fade-left"
                    className="mt-8 w-[50%] sm:w-auto lg:h-full sm:mt-auto mb-0  mx-auto"
                    src={val?.images.png}
                    alt="loading..."
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
