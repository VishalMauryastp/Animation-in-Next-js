"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RiMenu5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const currentPage = usePathname();
  const router = useRouter();
  // console.log(currentPage)
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    {
      link: "00 Home",
      to: "/home",
    },
    {
      link: "01 Destination",
      to: "/destination",
    },
    {
      link: "02 Crew",
      to: "/crew",
    },
    {
      link: "03 Technology",
      to: "/technology",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      offset:0,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.getElementById("myHeader");
      if (window.scrollY >= 74) {
        header.classList.add("bg-headerLinks/10"); 
        header.classList.add("backdrop-blur-[10px]"); 
      } else {
        header.classList.remove("bg-headerLinks/10"); 
        header.classList.remove("backdrop-blur-[10px]");
      }
    });
  }, [ ]);

  return (
    <header  className=" header fixed top-0  w-full z-50  ">
      <div id="myHeader" className="py-[14px] sm:py-0 flex justify-between  text-white items-center">
        <div className="rounded-full w-fit pl-[30px]  lg:pl-[55px]  ">
          <img
            className=""
            src="/starter-code/assets/shared/logo.svg"
            alt="Logo loading..."
            onClick={() => router.push("/")}
          />
        </div>
        <div className="sm:hidden mr-6 text-3xl">
          {openMenu ? (
            <IoClose
              onClick={() => {
                setOpenMenu(false);
              }}
            />
          ) : (
            <RiMenu5Fill
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          )}
        </div>
        <div className="hidden sm:flex  items-center  lg:w-[80%]">
          <div className="hidden lg:block bg-white opacity-[.25px] h-[1px] w-full mr-[-24px] relative  z-[2]"></div>
          <div className="flex px-10 lg:px-16  justify-between gap-8 xl:gap-[70px] bg-headerLinks  backdrop-blur-[81.55px] font-barlow font-normal tracking-[2.70px] break-words">
            {navLinks.map((val, i) => {
              return (
                <Link
                data-aos="fade-left"
                data-aos-delay={`${i*300}`}
                  key={i}
                  className={`  py-6 whitespace-nowrap transition-all duration-300 ${
                    currentPage == val.to
                      ? "active"
                      : "border-transparent border-b-[3px]  "
                  }`}
                  href={val.to}
                >
                  {val.link}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className="sm:hidden">
        <div
          className={` absolute w-full  z-20 grid transition-all duration-[400ms]  ${
            openMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } `}
        >
          <div className="overflow-hidden">
            <div className=" flex text-white flex-col p-8    bg-headerLinks  backdrop-blur-[81.55px] font-barlow font-normal tracking-[2.70px] break-words">
              {navLinks.map((val, i) => {
                return (
                  <Link 
                  data-aos="fade-left"
                  
                    key={i}
                    className={`  py-2 whitespace-nowrap transition-all duration-300 ${
                      currentPage == val.to
                        ? "active"
                        : "border-transparent border-b-[3px] "
                    }`}
                    href={val.to}
                  >
                    {val.link}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
