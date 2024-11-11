"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/Container";
import useEmblaCarousel from "embla-carousel-react";
import Headset from "../../public/img/brands/headset.svg";
import Translate from "../../public/img/brands/translate.svg";
import Text from "../../public/img/brands/text.svg";
import { motion } from "framer-motion";
import Head from "next/head";

const slides = [
    {
        title: "Kurzy",
        imageSrc: Headset,
        imageAlt: "Headset",
        content: (
            <>
                <div className="flex flex-col justify-between gap-2">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-lg sm:text-3xl font-bold pr-0 sm:pr-9 mr-0 sm:mr-16">
                            Individuálne kurzy
                        </h3>
                        <h3 className="text-lg sm:text-3xl font-bold pr-0 sm:pr-4">
                            Skupinové kurzy
                        </h3>
                    </div>

                    <div className="flex justify-between items-baseline pt-5 sm:pt-10">
                        <p className="text-base sm:text-lg">
                            <em>15 EUR / 45 min.</em>
                        </p>

                        <ul className="text-sm sm:text-lg pl-8">
                            <li>
                                2 osoby<span className="ml-2"><em>8 € osoba</em> /45 min.</span>
                            </li>
                            <li>
                                3 osoby<span className="ml-2"><em>7 € osoba</em> /45 min.</span>
                            </li>
                            <li>
                                4 osoby<span className="ml-2"><em>6 € osoba</em> /45 min.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Preklady",
        imageSrc: Translate,
        imageAlt: "Translate",
        content: (
            <>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="px-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 ">Preklad</h2>
                        <p className="text-xs font-stock mb-4">
                            *Cena prekladu sa určuje v závislosti od počtu NS<br /> a na základe rozsahu, obsahu, náročnosti textu a termínu dodania.
                        </p>
                    </div>
                    <div className="px-8">
                        <ul className="space-y-4 text-sm sm:text-lg">
                            <li><strong>Preklad z NJ do SJ:</strong> <em>14 EUR / 1 NS <br />(1800 znakov s medzerami)</em></li>
                            <li><strong>Preklad zo SJ do NJ:</strong> <em>16 EUR / 1 NS <br />(1800 znakov s medzerami)</em></li>
                        </ul>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Korektúra",
        imageSrc: Text,
        imageAlt: "Text",
        content: (
            <>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="px-8">
                        <h2 className="text-2xl font-bold mb-4 mr-0 sm:mr-16">Korektúra</h2>
                    </div>
                    <div className="px-8">
                        <ul className="space-y-4 text-sm sm:text-lg ">
                            <li><strong>Korektúra SJ textu:</strong> <em>8 EUR / 1 NS <br />(1800 znakov s medzerami)</em></li>
                            <li><strong>Korektúra NJ textu:</strong> <em>10 EUR / 1 NS <br />(1800 znakov s medzerami)</em></li>
                        </ul>
                    </div>
                </div>
            </>
        ),
    },
];

export const Cost: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);


    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    useEffect(() => {
        const autoplay = setInterval(scrollNext, 10000); // 6 sekúnd
        return () => clearInterval(autoplay);
    }, [scrollNext]);

    return (
        <>
            <Head>
                <title>Cenník - Profesionálne kurzy a preklady</title>
                <meta
                    name="description"
                    content="Pozrite si náš cenník individuálnych a skupinových kurzov, prekladov a korektúr."
                />
            </Head>
            <Container>
                <div className="flex justify-center items-center my-6">
                    <h1 className="text-4xl font-semibold text-gray-600 uppercase dark:text-gray-300">
                        Cenník
                    </h1>
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-full px-2 sm:px-10"
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 1.5 }}
                            >
                                <div className="flex flex-col sm:flex-row justify-evenly items-center bg-[#e2e8e4] dark:bg-transparent border border-[#cde9e5] px-4 py-4 sm:py-14 cursor-grabbing sm:px-4 rounded-2xl">
                                    <div className="flex flex-col w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
                                        {slide.content}
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] ml-0 sm:ml-4 bg-[#015C75] rounded-full p-2">
                                        <Image src={slide.imageSrc} alt={slide.imageAlt} width={40} height={40} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>                <div className="flex justify-end space-x-2 mt-4 mr-2 sm:mr-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                            className={`w-4 h-4 rounded-full border-2 transition-colors 
                        ${index === selectedIndex ? "bg-transparent" : "opacity-50"}
                        ${index === selectedIndex ? "border-black dark:border-[#cde9e5]" : "border-[#36313d]"}`}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </Container>
        </>
    );
};
