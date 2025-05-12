"use client";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import Headset from "../../public/img/brands/headset.svg";
import Translate from "../../public/img/brands/translate.svg";
import Text from "../../public/img/brands/text.svg";
import Head from "next/head";

const slides = [
    {
        title: "Kurzy",
        imageSrc: Headset,
        imageAlt: "Headset",
        content: (
            <div className="flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-10">
                {/* Individuálne kurzy */}
                <div className="w-full sm:w-1/2">
                    <h3 className="text-lg sm:text-2xl font-bold mb-4">Individuálne kurzy</h3>
                    <ul className="text-sm sm:text-lg space-y-2">
                        <li><em>16 EUR / 45 min.</em></li>
                        <li><em>21 EUR / 60 min.</em></li>
                    </ul>
                </div>

                {/* Skupinové kurzy */}
                <div className="w-full sm:w-1/2">
                    <h3 className="text-lg sm:text-2xl font-bold mb-4">Skupinové kurzy</h3>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-lg">
                        {/* 45 min blok */}
                        <div>
                            <p className="font-semibold mb-1">45 min.</p>
                            <ul className="space-y-1">
                                <li>2 osoby – <em>8 € osoba</em></li>
                                <li>3 osoby – <em>7 € osoba</em></li>
                                <li>4 osoby – <em>6 € osoba</em></li>
                            </ul>
                        </div>

                        {/* 60 min blok */}
                        <div>
                            <p className="font-semibold mb-1">60 min.</p>
                            <ul className="space-y-1">
                                <li>2 osoby – <em>11 € osoba</em></li>
                                <li>3 osoby – <em>9 € osoba</em></li>
                                <li>4 osoby – <em>8 € osoba</em></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Preklady",
        imageSrc: Translate,
        imageAlt: "Translate",
        content: (
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Preklad</h2>
                    <p className="text-xs font-stock mb-4">
                        *Cena prekladu sa určuje v závislosti od počtu NS<br />
                        a na základe rozsahu, obsahu, náročnosti textu a termínu dodania.
                    </p>
                </div>
                <div className="px-8">
                    <ul className="space-y-4 text-sm sm:text-lg">
                        <li><strong>Preklad z NJ do SJ:</strong> <em>15 EUR / 1 NS (1800 znakov s medzerami)</em></li>
                        <li><strong>Preklad zo SJ do NJ:</strong> <em>17 EUR / 1 NS (1800 znakov s medzerami)</em></li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Korektúra",
        imageSrc: Text,
        imageAlt: "Text",
        content: (
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="px-8">
                    <h2 className="text-2xl font-bold mb-4">Korektúra</h2>
                </div>
                <div className="px-8">
                    <ul className="space-y-4 text-sm sm:text-lg">
                        <li><strong>Korektúra SJ textu:</strong> <em>9 EUR / 1 NS (1800 znakov s medzerami)</em></li>
                        <li><strong>Korektúra NJ textu:</strong> <em>11 EUR / 1 NS (1800 znakov s medzerami)</em></li>
                    </ul>
                </div>
            </div>
        ),
    },
];

export const Cost: React.FC = () => {
    return (
        <>
            <Head>
                <title>Cenník | Profesionálne kurzy a preklady</title>
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

                <div className="flex flex-col gap-10">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between items-center bg-[#e2e8e4] dark:bg-transparent border border-[#cde9e5] px-4 py-6 sm:py-10 rounded-2xl"
                        >
                            <div className="w-full text-center">
                                {slide.content}
                            </div>
                            <div className="mt-6 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] bg-[#015C75] rounded-full p-2">
                                <Image
                                    src={slide.imageSrc}
                                    alt={slide.imageAlt}
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};
