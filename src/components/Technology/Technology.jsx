"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Technology = () => {
  const [activeSpan, setActiveSpan] = useState(1);

  const handleSpanClick = (spanNumber) => {
    setActiveSpan(spanNumber);
  };
  const data = [
    {
      keyword: "1",
      img: "/starter-code/assets/technology/image-launch-vehicle-landscape.jpg",
      Mimg: "/starter-code/assets/technology/image-launch-vehicle-portrait.jpg",
      subtitle: "THE TERMINOLOGY…",
      heading: "LAUNCH VEHICLE",
      para: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      keyword: "2",
      img: "/starter-code/assets/technology/image-spaceport-landscape.jpg",
      Mimg: "/starter-code/assets/technology/image-spaceport-portrait.jpg",
      subtitle: "THE TERMINOLOGY…",
      heading: "SPACEPORT",
      para: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      keyword: "3",
      img: "/starter-code/assets/technology/image-space-capsule-landscape.jpg",
      Mimg: "/starter-code/assets/technology/image-space-capsule-portrait.jpg",
      subtitle: "THE TERMINOLOGY…",
      heading: "SPACE CAPSULE",
      para: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);

  return (
    <div className="flex w-full min-h-[calc(100vh-75px)] pb-8 sm:pb-0 overflow-hidden ">
      <div className="w-[90%] mx-auto lg:mx-0 lg:ml-auto lg:mr-0 my-auto">
        <h1 data-aos="fade-right" className=" mt-8 md:mt-0  mx-auto text-[16px] sm:text-[20px] lg:text-[28px] font-barlow break-words font-normal text-white tracking-[4.72px]">
          <span className="text-headerLinks/50">01</span> Pick your destination
        </h1>
        <div className="mt-8 lg:mt-0 flex flex-col-reverse lg:flex-row  lg:min-h-[65vh]">
          <div className="lg:w-[60%] flex flex-col lg:flex-row items-center ">
            <div className="flex py-12  gap-8 lg:flex-col  font-bold font-bellefair text-lg">
              <span data-aos="fade-right" 
                className={`w-[40px] md:w-[60px] h-[40px] md:h-[60px] cursor-pointer flex justify-center items-center rounded-full ${
                  activeSpan === 1 ? "bg-white text-black" : "bg-white/40"
                }`}
                onClick={() => handleSpanClick(1)}
              >
                1
              </span>
              <span data-aos="fade-right" data-aos-delay="100"
                className={`w-[40px] md:w-[60px] h-[40px] md:h-[60px] cursor-pointer flex justify-center items-center rounded-full ${
                  activeSpan === 2 ? "bg-white text-black" : "bg-white/40"
                }`}
                onClick={() => handleSpanClick(2)}
              >
                2
              </span>
              <span data-aos="fade-right" data-aos-delay="200"
                className={`w-[40px] md:w-[60px] h-[40px] md:h-[60px] cursor-pointer flex justify-center items-center rounded-full ${
                  activeSpan === 3 ? "bg-white text-black" : "bg-white/40"
                }`}
                onClick={() => handleSpanClick(3)}
              >
                3
              </span>
            </div>
            <div className="text-white text-center lg:text-left">
              {data
                .filter((item) => {
                  return item.keyword.includes(activeSpan);
                })
                .map((val, i) => {
                  // console.log(val);
                  return (
                    <div key={i} className="lg:px-16">
                      <h1 data-aos="fade-right"  className="text-[16px] font-normal font-barlow  tracking-[2.70px] text-skyBlue break-words">{val.subtitle}</h1>
                      <h2  data-aos="fade-right" data-aos-delay="50" className="my-4 lg:my-0  text-[24px] md:text-[40px] lg:text-[56px] font-bellefair uppercase">{val.heading}</h2>
                      <p data-aos="fade-right" data-aos-delay="100" className="md:w-[80%] lg:w-full  mx-auto lg:mx-0 text-[15px] md:text-[16px]  lg:text-[18px]  font-normal font-barlow_c   text-skyBlue break-words">{val.para}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div   data-aos="fade-left"   className="lg:w-[40%] ">
            {data
              .filter((item) => {
                return item.keyword.includes(activeSpan);
              })
              .map((val, i) => {
                return (
                  <picture className=" " key={i}>
                    <source media="(min-width:1024px )" srcSet={val.Mimg} />
                    <img  
                      className="w-full h-full"
                      src={val.img}
                      alt="loading..."
                    />
                  </picture>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
