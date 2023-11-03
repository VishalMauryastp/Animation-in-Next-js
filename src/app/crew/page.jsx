// import ComingSoon from '@/components/ComingSoon'
import Carousel from "@/components/Crew/Carousel";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-cover bg-no-repeat bg-[url('/starter-code/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/starter-code/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/starter-code/assets/crew/background-crew-desktop.jpg')]">
      <div className="pt-[74.4px] ">
        <Carousel />
        {/* <ComingSoon /> */}
      </div>
    </section>
  );
};

export default page;
// h-auto   lg:h-[calc(100vh-164px)]