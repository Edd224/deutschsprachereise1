"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import aboutImg from "../../public/img/FlagGermani.jpg";
import logo from "../../public/img/logoDeutscheWhiteAnim.svg";
import Head from "next/head";
import { Envelope, FacebookLogo, PhoneCall } from "phosphor-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Contact = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else{
            controls.start("hidden");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);




  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.5, duration: 0.5 }
    })
  };

  return (
    <>
      <Head>
        <title>Kontakt - Deutschsprachereise | Jazykové kurzy a překlady</title>
        <meta
          name="description"
          content="Deutschsprachereise je jazyková společnost zaměřená na online výuku němčiny a slovenštiny, překladatelské a editorskou činnost."
        />
        <meta
          name="keywords"
          content="jazykové kurzy, němčina, slovenština, online výuka, překlady, editorská činnost"
        />
      </Head>
      <Container className="relative w-full mt-10 rounded-2xl p-4 sm:p-8 overflow-hidden">
        <Image
          src={aboutImg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute filter grayscale inset-0 z-0"
        />
        <div
          ref={ref}
          className="relative z-10 flex flex-col items-center justify-center sm:justify-evenly w-full h-full p-8 bg-[#00242F] bg-opacity-70 rounded-2xl"
        >
          {/* Contact information */}
          <div className="text-white text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Kontakt</h1>
            <div className="flex flex-col gap-3 mt-4 text-lg sm:text-xl leading-normal sm:leading-relaxed">
              <motion.div
                className="flex items-center justify-center sm:justify-start border-b border-gray-300 pb-2"
                variants={fadeInVariant}
                custom={1}
                initial="hidden"
                animate={controls}
              >
                <Envelope size={24} />
                <p className="px-3 cursor-pointer">deutschsprachereise@gmail.com</p>
              </motion.div>

              <motion.div
                className="flex items-center justify-center sm:justify-start border-b border-gray-300 pb-2"
                variants={fadeInVariant}
                custom={2}
                initial="hidden"
                animate={controls}
              >
                <PhoneCall size={24} />
                <p className="px-3">+421 948 373 908</p>
              </motion.div>

              <motion.div
                className="flex items-center justify-center sm:justify-start border-b border-gray-300 pb-2"
                variants={fadeInVariant}
                custom={3}
                initial="hidden"
                animate={controls}
              >
                <FacebookLogo size={24} />
                <a
                  href="https://www.facebook.com/p/Deutsch-Sprache-Reise"
                  className="px-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </motion.div>
            </div>
          </div>

          {/* Centered logo */}
          <div className="flex items-center justify-center mt-4 my-10 sm:mt-10">
            <Image src={logo} alt="Logo" width={100} height={100} className="sm:w-40 sm:h-40" />
          </div>
        </div>
      </Container>
    </>
  );
};
