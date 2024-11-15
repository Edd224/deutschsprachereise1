"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import aboutImg from "../../public/img/about.jpg";
import logo from "../../public/img/logoDeutscheWhiteAnim.svg";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const About = () => {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

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
        hidden: { opacity: 0, y: 10 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.5, duration: 0.5 }
        })
    };

    return (
        <>
            <Head>
                <title>O nás - Deutschsprachereise | Jazykové kurzy a překlady</title>
                <meta
                    name="description"
                    content="Deutschsprachereise je jazyková společnost zaměřená na online výuku němčiny a slovenštiny, překladatelské a editorskou činnost."
                />
                <meta
                    name="keywords"
                    content="jazykové kurzy, němčina, slovenština, online výuka, překlady, editorská činnost"
                />
            </Head>
            <div className="relative w-full pt-10 border-t px-2 sm:px-8 border-gray-400 dark:border-[#015C75]">
                <Container ref={ref} className="relative z-10 flex flex-wrap">
                    {/* Textová časť */}
                    <div className="flex sm:text-left text-center items-center w-full lg:w-1/2">
                        <div className="max-w-2xl mb-8">
                            <motion.h1
                                initial="hidden"
                                animate={controls}
                                variants={fadeInVariant}
                                custom={1}
                                className="text-[32px] font-bold text-gray-800 lg:text-4xl xl:text-5xl dark:text-white"
                            >
                                Deutschsprachereise
                            </motion.h1>
                            <motion.p
                                initial="hidden"
                                animate={controls}
                                variants={fadeInVariant}
                                custom={2}
                                className="py-5 pr-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"
                            >
                                Sme jazyková spoločnosť, ktorá sa zaoberá výučbou nemeckého a slovenského jazyka
                                online formou, prekladateľskou a editorskou činnosťou. Vydajte sa s nami na cestu
                                nemeckým jazykom. Popracujte na vlastnom osobnostnom rozvoji, zdokonaľte svoje
                                komunikačné zručnosti a rozšírte pracovné možnosti. Vložte sa do rúk našim skúseným
                                lektorom a spolu to dokážeme !
                            </motion.p>
                        </div>
                    </div>

                    {/* Obrázková časť */}
                    <div className="relative flex items-center mx-auto justify-center w-full lg:w-1/2">
                        <div className="relative">
                            <Image
                                src={aboutImg}
                                className="object-cover rounded-lg"
                                alt="Hero Illustration"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-[#00242F] opacity-50 rounded-lg"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-[#015C75]">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="w-32 h-32 lg:w-40 lg:h-40 text-[#015C75]"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
