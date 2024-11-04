"use client"



import Image from "next/image";
import { Container } from "@/components/Container";
import aboutImg from "../../public/img/about.jpg";
import logo from "../../public/img/logoDeutscheWhiteAnim.svg"
import Head from "next/head";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <>
            <Head>
                <title>O nás - Deutschsprachereise | Jazykové kurzy a překlady</title>
                <meta name="description" content="Deutschsprachereise je jazyková společnost zaměřená na online výuku němčiny a slovenštiny, překladatelské a editorskou činnost." />
                <meta name="keywords" content="jazykové kurzy, němčina, slovenština, online výuka, překlady, editorská činnost" />
            </Head>
            <div className="relative w-full pt-10 border-t border-gray-100 dark:border-trueGray-700">
                <Container className="relative z-10 flex flex-wrap">
                    <div className="flex sm:text-left text-center items-center w-full lg:w-1/2">
                        <div className="max-w-2xl mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl xl:text-6xl dark:text-white">
                                Deutschsprachereise
                            </h1>
                            <motion.p
                                ref={ref}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
                                transition={{ duration: 0.4 }}
                                className="py-5 mr-4 text-base leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"
                            >
                                Sme jazyková spoločnosť, ktorá sa zaoberá výučbou nemeckého a slovenského jazyka online formou, prekladateľskou a editorskou činnosťou.
                                Vydajte sa s nami na cestu nemeckým jazykom. Popracujte na vlastnom osobnostnom rozvoji, zdokonaľte svoje komunikačné zručnosti a rozšírte pracovné možnosti.
                                Vložte sa do rúk našim skúseným lektorom a spolu to dokážeme.
                            </motion.p>
                        </div>
                    </div>
                    <div className="relative flex items-center mx-auto justify-center w-full lg:w-1/2">
                        <div className="relative">
                            <Image
                                src={aboutImg}
                                className="object-cover rounded-lg"
                                alt="Hero Illustration"
                                loading="eager"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="w-32 h-32 lg:w-40 lg:h-40"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
