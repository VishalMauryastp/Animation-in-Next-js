import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./Homehero.css";

const HomeHero = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className=" text-white w-[80%] mx-auto flex flex-col gap-24 items-center justify-center lg:flex-row h-[calc(100vh-74px)] lg:items-end  lg:pb-24  "
    >
      <div className="lg:w-[50%] text-center lg:text-left  ">
        <div className="m-auto">
          <h1 className="text-[16px] sm:text-[20px] lg:text-[28px] font-barlow break-words font-normal text-skyBlue tracking-[4.72px]">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h2 className="text-[80px] sm:text-[150px] font-bellefair uppercase">
            Space
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-barlow_c break-words font-normal text-skyBlue mx-auto lg:mx-0  sm:max-w-[60%]  lg:max-w-[380px] ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className=" lg:w-[50%] flex ">
        <div
          className="ripple cursor-pointer transition-all after:transition-all before:transition-all lg:ml-auto lg:mr-0 w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full flex"
          onClick={() => router.push("/destination")}
        >
          <h1 className="m-auto text-black text-[32px] tracking-[2px] font-normal font-bellefair ">
            Explore
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
