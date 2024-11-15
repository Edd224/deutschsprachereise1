"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;

  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden"); // Reset animácie pri odchode
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
      transition: { delay: custom * 0.3, duration: 0.5 },
    }),
  };

  return (
    <>
      <Head>
        <title>{data.title} - Deutschsprachereise</title>
        <meta name="description" content={data.desc} />
        <meta name="keywords" content="jazykové kurzy, online výučba, prekladateľská činnosť, korektúry, nemčina" />
      </Head>

      <Container
        ref={ref}
        className="flex flex-wrap bg-[#e2e8e4] dark:bg-[#131412] mb-20 lg:gap-10 lg:flex-nowrap rounded-lg"
      >
        {/* Obrázok */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          custom={1}
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <Image
            src={data.image}
            width={550}
            height={550}
            alt="Benefits"
            className={"object-cover rounded-lg border-2 dark:border-[#015C75] border-gray-400"}
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </motion.div>

        {/* Textový obsah */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          custom={2}
          className={`flex flex-wrap sm:px-6 px-0 items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div className="flex flex-col w-full mt-4">
            <motion.h1
              className="max-w-2xl text-3xl font-bold text-gray-800 lg:text-4xl dark:text-white relative custom-underline"
              variants={fadeInVariant}
              custom={3}
            >
              {data.title}
            </motion.h1>
            <motion.p
              className="max-w-2xl pt-6 text-lg text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
              variants={fadeInVariant}
              custom={4}
            >
              {data.desc}
            </motion.p>
          </div>

          {/* Zoznam bodov */}
          <div className="w-full mt-3">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon} custom={index + 5}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </motion.div>
      </Container>
    </>
  );
};

function Benefit(props: { title: string; icon: React.ReactNode; children: React.ReactNode; custom: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: props.custom * 0.3, duration: 0.4 } },
      }}
      className="flex items-start mt-6 space-x-3"
    >
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#015C75] rounded-md w-11 h-11">
        {React.cloneElement(props.icon as React.ReactElement, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">{props.title}</h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{props.children}</p>
      </div>
    </motion.div>
  );
}
