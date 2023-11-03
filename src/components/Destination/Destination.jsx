"use client";
import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import Aos from "aos";
import "aos/dist/aos.css";

const Destination = () => {
  const [activeLink, setActiveLink] = useState("Moon");
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);
  return (
    <div  className="  min-h-[calc(100vh-74px)] pb-12 lg:pb-0 flex ">
      <div className="m-auto w-full">
       
       
        <div className="mt-12  w-[90%] xl:w-[80%] mx-auto flex flex-col lg:flex-row  ">
          <div data-aos="fade-right" className="lg:w-[50%]">
            <img 
              className="mx-auto w-[70%] md:w-[50%] lg:w-auto   "
              src={`/starter-code/assets/destination/image-${activeLink?.toLowerCase()}.png`}
              alt="loading..."
            />
          </div>
          <div data-aos="fade-left" className="lg:w-[50%]  flex ">
            <div className="mx-auto">
              <div className="flex justify-between text-[18px] text-white mx-auto mt-12 lg:mt-0 lg:mx-0  w-[286px] ">
                <button
                  className={` tracking-[2.70px] font-barlow break-words font-normal border-b-2 ${
                    activeLink == "Moon"
                      ? "  border-white"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setActiveLink("Moon");
                  }}
                >
                  Moon
                </button>
                <button
                  className={` tracking-[2.70px] font-barlow break-words font-normal border-b-2 ${
                    activeLink == "Mars"
                      ? "  border-white"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setActiveLink("Mars");
                  }}
                >
                  Mars
                </button>
                <button
                  className={` tracking-[2.70px] font-barlow break-words font-normal border-b-2 ${
                    activeLink == "EUROPA"
                      ? "  border-white"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setActiveLink("EUROPA");
                  }}
                >
                  EUROPA
                </button>
                <button
                  className={` tracking-[2.70px] font-barlow break-words font-normal border-b-2 ${
                    activeLink == "TITAN"
                      ? "  border-white"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setActiveLink("TITAN");
                  }}
                >
                  TITAN
                </button>
              </div>
              <div>
                {data.destinations
                  ?.filter((item) => {
                    return item.name
                      ?.toLowerCase()
                      .includes(activeLink?.toLowerCase());
                  })
                  .map((val, i) => {
                    return (
                      <div key={i} className="text-center lg:text-left">
                        <h1 className=" mt-4 lg:mt-0 text-[56px] md:text-[80px] lg:text-[100px] font-normal break-words font-bellefair text-white">
                          {val?.name}
                        </h1>
                        <p className=" mx-auto sm:w-[80%] lg:mx-0 lg:w-full  text-[15px] md:text-[16px] lg:text-[18px] tracking-[1px] text-skyBlue font-barlow_c">
                        {/* lg:max-w-[500px] */}
                          {val?.description}
                        </p>
                        <div className="my-8 h-[1px] bg-[#383B4B]" ></div>
                        <div className="text-white flex justify-evenly lg:justify-start lg:gap-24">
                          <div>
                            <h1 className="text-skyBlue text-[14px] font-barlow font-normal tracking-[2.36px] uppercase break-word">AVG. DISTANCE</h1>
                            <p className="text-[20px] md:text-[28px] font-bellefair font-normal  uppercase break-word">{val?.distance}</p>
                          </div>
                          <div>
                            <h1 className="text-skyBlue text-[14px] font-barlow font-normal tracking-[2.36px] uppercase break-word">Est. travel time</h1>
                            <p className="text-[20px] md:text-[28px] font-bellefair font-normal  uppercase break-word">{val?.travel}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
