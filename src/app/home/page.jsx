"use client";
import Carousel from "@/components/Crew/Carousel";
import Destination from "@/components/Destination/Destination";
import HomeHero from "@/components/Home/HomeHero";
import Technology from "@/components/Technology/Technology";
import React, { useEffect } from "react";

const Page = () => {
  return (
    <>
      <section className=" bg-black h-screen bg-cover  bg-no-repeat bg-[url('/starter-code/assets/home/background-home-mobile.jpg')] md:bg-[url('/starter-code/assets/home/background-home-tablet.jpg')] lg:bg-[url('/starter-code/assets/home/background-home-desktop.jpg')]">
        <div className="pt-[74.4px]">
          <HomeHero />
        </div>
      </section>
      <section className=" min-h-screen bg-cover bg-no-repeat bg-[url('/starter-code/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/starter-code/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/starter-code/assets/destination/background-destination-desktop.jpg')]">
        <div className="pt-[74.4px]">
          <Destination />
        </div>
      </section>
      <section className="min-h-screen bg-cover bg-no-repeat bg-[url('/starter-code/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/starter-code/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/starter-code/assets/crew/background-crew-desktop.jpg')]">
        <div className="pt-[74.4px] ">
          <Carousel />
        </div>
      </section>
      <section className=" min-h-screen bg-cover bg-no-repeat bg-[url('/starter-code/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/starter-code/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/starter-code/assets/technology/background-technology-desktop.jpg')]">
        <div className="pt-[74.4px]  ">
          <Technology />
        </div>
      </section>
    </>
  );
};

export default Page;
