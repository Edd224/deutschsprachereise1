"use client"



import { Container } from "@/components/Container";
import Headset from "../../public/img/brands/headset.svg";
import Translate from "../../public/img/brands/translate.svg";
import Text from "../../public/img/brands/text.svg";
import Image from "next/image";
import "react-card-stack-carousel/styles/styles.css";
import { StackedCarousel } from "react-card-stack-carousel";
import { useRef } from "react";
import Head from "next/head";

export const Cost = () => {
    const containerHeight = 400;





    return (
        <>
            <Head>
                <title>Cenník - Profesionálne kurzy a preklady</title>
                <meta name="description" content="Pozrite si náš cenník individuálnych a skupinových kurzov, prekladov a korektúr." />
            </Head>

            <div className="relative w-full my-16 border-t border-gray-100 dark:border-[#015C75]">
                <Container className="relative z-10">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-semibold text-gray-600 uppercase dark:text-gray-300">
                            Cenník
                        </h1>
                    </div>

                    <StackedCarousel height={containerHeight} autoplay={true} autoplayInterval={6000} >
                        <div className="flex items-center justify-center flex-col shadow-lg p-14 dark:bg-[#131412] bg-[#8fc1bc] dark:text-white text-[#100b09] text-center h-96 w-full max-w-[calc(100%-20px)] md:w-[750px] my-12 mx-2 rounded-lg">
                            <div className="absolute -top-0 -left-[-10px] sm:-left-[70px] mt-12 dark:bg-[#131412] bg-[#8fc1bc] px-3 py-2.5 rounded-md">
                                <h2 className="text-2xl ml-2">Kurzy</h2>
                            </div>
                            <div className="mb-6">
                                <Image
                                    src={Headset}
                                    width="80"
                                    height="80"
                                    className="object-cover w-full bg-[#000] rounded-full opacity-60 backdrop-blur-xl p-2 sm:p-4 border"
                                    alt="Hero Illustration"
                                    loading="eager"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-lg sm:text-3xl font-bold mb-2">
                                    Individuálne kurzy
                                </h3>
                                <p className="text-base sm:text-lg">
                                    <em>15 EUR / 45 min.</em>
                                </p>
                                <h3 className="text-lg sm:text-3xl font-bold mt-4">
                                    Skupinové kurzy
                                </h3>
                                <ul className="text-base sm:text-lg ">
                                    <li>2 osoby<span className="ml-2"><em>8 EUR osoba</em> / 45 min.</span></li>
                                    <li>3 osoby<span className="ml-2"><em>7 EUR osoba</em> / 45 min.</span></li>
                                    <li>4 osoby<span className="ml-2"><em>6 EUR osoba</em> / 45 min.</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center justify-center flex-col shadow-lg p-8 dark:bg-[#131412] bg-[#8fc1bc] dark:text-white text-[#100b09] text-center h-96 w-full max-w-[calc(100%-20px)] md:w-[750px] my-12 mx-2 rounded-lg">
                            <div className="absolute  -top-0 -left-[-10px] sm:-left-[70px] mt-12 dark:bg-[#131412] bg-[#8fc1bc] px-3 py-2.5 rounded-md">
                                <h2 className="text-2xl">Preklady</h2>
                            </div>
                            <div className="mb-6">
                                <Image
                                    src={Translate}
                                    width="80"
                                    height="80"
                                    className="object-cover w-full bg-[#DD0000] rounded-full opacity-60 backdrop-blur-xl p-2 sm:p-4 border border-white"
                                    alt="Hero Illustration"
                                    loading="eager"
                                />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 ">
                                Preklad
                            </h2>
                            <p className="text-sm mb-4">
                                *Cena prekladu sa určuje v závislosti od počtu NS a na základe rozsahu, obsahu, náročnosti textu a termínu dodania.
                            </p>
                            <ul className="space-y-4 text-base sm:text-lg">
                                <li><strong>Preklad z NJ do SJ:</strong> <em>14 EUR / 1 NS (1800 znakov s medzerami)</em></li>
                                <li><strong>Preklad zo SJ do NJ:</strong> <em>16 EUR / 1 NS (1800 znakov s medzerami)</em></li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-center flex-col ] shadow-lg p-8 dark:bg-[#131412] bg-[#8fc1bc] dark:text-white text-[#100b09] text-center h-96 w-full max-w-[calc(100%-20px)] md:w-[750px] my-12 mx-2 rounded-lg">
                            <div className="absolute -top-0 -left-[-10px] sm:-left-[70px] mt-12 dark:bg-[#131412] bg-[#8fc1bc]  px-3 py-2.5 rounded-md">
                                <h2 className="text-2xl">Korektúra</h2>
                            </div>
                            <div className="mb-6">
                                <Image
                                    src={Text}
                                    width="80"
                                    height="80"
                                    className="object-cover w-full bg-[#FFCC00] rounded-full opacity-60 backdrop-blur-xl p-2 sm:p-4 border border-white"
                                    alt="Hero Illustration"
                                    loading="eager"
                                />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 ">
                                Korektúra
                            </h2>
                            <ul className="space-y-4 text-lg ">
                                <li><strong>Korektúra SJ textu:</strong> <em>8 EUR / 1 NS <br />(1800 znakov s medzerami)</em></li>
                                <li><strong>Korektúra NJ textu:</strong> <em>10 EUR / 1 NS <br />(1800 znakov s medzerami)</em></li>
                            </ul>
                        </div>
                    </StackedCarousel>
                </Container>
            </div>
        </>
    );
};
