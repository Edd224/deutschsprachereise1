"use client"

import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/logoDeutscheWhiteAnim.svg";
import leoni from "../../public/img/brands/leoni-2.svg";
import adient from "../../public/img/brands/adient-vector-logo.svg";
import yang from "../../public/img/brands/yanfeng-automotive-interiors-vector-logo.svg";
import flag from "../../public/img/FlagGermani.jpg";
import { Typed } from "react-typed";
import { useEffect, useRef } from "react";
import localFont from "next/font/local";

const alternativeFont = localFont({ 
  src: '../app/font/EireneSans-Regular.otf'
})



const TypedComponent = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "ONLINE KURZY PRE FIRMY AJ JEDNOTLIVCOV",
        "PREKLADY Z/DO NEMECKÉHO JAZYKA",
        "EDITORSKÁ ČINNOSŤ",
      ],
      typeSpeed: 65,
      backSpeed: 20,
      loop: true,
      showCursor: false,
      stopped: true,
    };

    // Initialize Typed
    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy(); // Clean up on component unmount
    };
  }, []);

  return (
    <div
      ref={el}
      className="py-5 h-24 text-base leading-normal lg:text-xl xl:text-2xl text-white flex items-center justify-center"
    />
  );
};

export const Hero = () => {
  return (
    <div className="relative  w-full h-screen mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-[80%] object-cover opacity-100 dark:opacity-60 rounded-tl-[580px] rounded-tr-2xl "
        >
          <source src="/video/video-bg-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0  z-0"></div>

        {/* Second pseudo border */}
        <div className="absolute inset-0  z-0"></div>
      </div>



      {/* Content */}
      <Container className="relative z-10 flex flex-wrap top-0 sm:top-28">
        <div className="flex item-center mt-20 w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 flex flex-col justify-center items-center">
            <h1 className={`${alternativeFont.className} text-3xl font-bold text-white lg:text-4xl xl:text-6xl`}>
              Deutschsprachereise
            </h1>
            <TypedComponent />
          </div>
        </div>
        <div className="flex items-center mx-auto justify-center w-[80%]  lg:w-1/2">
          <div>
            <Image
              src={heroImg}
              width="300"
              height="300"
              className={"object-contain"}
              alt="Hero Illustration"
              loading="eager"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col justify-center py-4 mt-[30px] sm:mt-[160px] ">
          <div className="text-2xl text-center text-white z-50">
            Dôveruje nám viac ako <span className="text-indigo-600">50+</span>{" "}
            študentov
          </div>

          <div className="Logo flex justify-center gap-4 md:justify-around mt-2 z-50">
            <div className=" ">
              <Image
                src={adient}
                width={150}
                height={33}
                alt="Adient Logo"

              />
            </div>
            <div className="flex justify-center">
              <Image
                src={leoni}
                width={150}
                height={33}
                alt="Leoni Logo"
                loading="eager"

              />
            </div>
            <div className="">
              <Image
                src={yang}
                width={150}
                height={33}
                alt="Yang Logo"
                loading="eager"

              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};