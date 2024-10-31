"use client"



import { Container } from "@/components/Container";
import Headset from "../../public/img/brands/headset.svg";
import Translate from "../../public/img/brands/translate.svg";
import Text from "../../public/img/brands/text.svg";
import Image from "next/image";
import "react-card-stack-carousel/styles/styles.css";
import { StackedCarousel } from "react-card-stack-carousel";
import { useRef } from "react";

export const Cost = () => {
    const containerHeight = 400;





    return (
        <div className="relative w-full my-16 border-t border-gray-100 dark:border-trueGray-700">
            <Container className="relative z-10">
                <div className="text-center mb-12">
                    <h6 className="text-4xl font-semibold text-gray-600 uppercase dark:text-gray-300">
                        Cenník
                    </h6>
                </div>

                <StackedCarousel height={containerHeight} autoplay={false} autoplayInterval={5000} >
                    <div className="flex items-center justify-center flex-col rounded-tl-[200px] shadow-lg p-14 bg-black text-center h-96 w-full max-w-[calc(100%-20px)] md:w-[650px] my-12 mx-2">
                        <div className="absolute -top-0 -left-[-10px] sm:-left-[70px] mt-12 bg-black text-white px-3 py-2.5 rounded-md">
                            <h1 className="text-2xl">Kurzy</h1>
                        </div>
                        <div className="mb-6">
                            <Image
                                src={Headset}
                                width="80"
                                height="80"
                                className="object-cover w-full bg-[#130c0c] rounded-full opacity-60 backdrop-blur-xl p-2 sm:p-4 border"
                                alt="Hero Illustration"
                                loading="eager"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                                Individuálne kurzy
                            </h2>
                            <p className="text-base sm:text-lg text-gray-300">
                                <em>15 EUR / 45 min.</em>
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-white">
                                Skupinové kurzy
                            </h2>
                            <ul className="text-base sm:text-lg  text-gray-300">
                                <li>2 osoby<span className="ml-6"><em>8 EUR/ osoba</em></span></li>
                                <li>3 osoby<span className="ml-6"><em>7 EUR/ osoba</em></span></li>
                                <li>4 osoby<span className="ml-6"><em>6 EUR/ osoba</em></span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-col rounded-tl-[200px] shadow-lg p-8 bg-[#dd0000] text-center h-96 w-full max-w-[calc(100%-20px)] md:w-[650px] my-12 mx-2">
                        <div className="absolute  -top-0 -left-[-10px] sm:-left-[70px] mt-12 bg-[#dd0000] text-white px-3 py-2.5 rounded-md">
                            <h1 className="text-2xl">Preklady</h1>
                        </div>
                        <div className="mb-6">
                            <Image
                                src={Translate}
                                width="80"
                                height="80"
                                className="object-cover w-full bg-[#130c0c] rounded-full opacity-60 backdrop-blur-xl p-2 sm:p-4 border border-red-500"
                                alt="Hero Illustration"
                                loading="eager"
                            />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                            Preklad
                        </h2>
                        <p className="text-base text-gray-300 mb-4">
                            *Cena prekladu sa určuje v závislosti od počtu NS a na základe rozsahu, obsahu, náročnosti textu a termínu dodania.
                        </p>
                        <ul className="space-y-4 text-base sm:text-lg text-gray-300">
                            <li><strong>Preklad z NJ do SJ:</strong> <em>14 EUR / 1 NS (1800 znakov s medzerami)</em></li>
                            <li><strong>Preklad zo SJ do NJ:</strong> <em>16 EUR / 1 NS (1800 znakov s medzerami)</em></li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center flex-col rounded-tl-[200px] shadow-lg p-8 bg-[#ffce00] text-center h-96 w-full max-w-[calc(100%-20px)] md:w-[650px] my-12 mx-2">
                        <div className="absolute -top-0 -left-[-10px] sm:-left-[70px] mt-12 bg-[#ffce00] text-white px-3 py-2.5 rounded-md">
                            <h1 className="text-2xl text-black sm:text-3xl">Korektúra</h1>
                        </div>
                        <div className="mb-6">
                            <Image
                                src={Text}
                                width="80"
                                height="80"
                                className="object-cover w-full bg-[#130c0c] rounded-full opacity-60 backdrop-blur-xl p-2 sm:p-4 border border-yellow-600"
                                alt="Hero Illustration"
                                loading="eager"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-black">
                            Korektúra
                        </h2>
                        <ul className="space-y-4 text-lg text-black">
                            <li><strong>Korektúra SJ textu:</strong> <em>8 EUR / 1 NS <br />(1800 znakov s medzerami)</em></li>
                            <li><strong>Korektúra NJ textu:</strong> <em>10 EUR / 1 NS <br/>(1800 znakov s medzerami)</em></li>
                        </ul>
                    </div>
                </StackedCarousel>
            </Container>
        </div>
    );
};
