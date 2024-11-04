"use client";


import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/Container";
import useEmblaCarousel from "embla-carousel-react";

import userOneImg from "../../public/img/man1.png";
import userTwoImg from "../../public/img/man2.png";
import userThreeImg from "../../public/img/women3.png";
import userFourImg from "../../public/img/man3.png";
import userFiveImg from "../../public/img/women2.png";
import userSixImg from "../../public/img/women1.png";


import localFont from "next/font/local";


const alternativeFont = localFont({ 
  src: '../app/font/EireneSans-Italic.otf'
})


const testimonials = [
  {
    text: "Super, odporucam! Je to lepsie nazivo ako cez Teams :-) Formou konverzacie, prace s ucebnicou, pocuvanie hlasovych ukazok z bezneho zivota. Dakujem",
    name: "Jano Kunert",
    title: "Adient",
    image: userOneImg,
  },
  {
    text: "Veľmi odporúčam túto jazykovú školu! Výuka prebieha profesionálne a s dôrazom na konverzácie, čo mi veľmi pomohlo pri príprave na nové pracovné výzvy v nemeckom prostredí.",
    name: "Jozef Malík",
    title: "Projektový manažér, Adient",
    image: userTwoImg,
  },
  {
    text: "Na hodinách sa cítim uvoľnene, čo mi umožňuje rýchlo sa učiť a napredovať. Lektori sú veľmi nápomocní a prispôsobia sa individuálnym potrebám. Výrazne sa mi zlepšila slovná zásoba aj gramatika.",
    name: "Andrea Horváthová",
    title: "Vedúca oddelenia, Leoni",
    image: userThreeImg,
  },
  {
    text: "Škola mi veľmi pomohla zvládnuť formálnu aj bežnú konverzáciu v nemčine. Oceňujem najmä individuálny prístup a flexibilitu časov, čo mi umožňuje zladiť prácu so štúdiom.",
    name: "Martin Novotný",
    title: "Technický inžinier, Yanfeng Automotive",
    image: userFourImg,
  },
  {
    text: "„Táto jazyková škola je pre mňa skvelá voľba! Hľadala som možnosť, ako sa učiť nemecky z pohodlia domova a DeutschSpracheReise mi presne to ponúkla. Hodiny sú zábavné, interaktívne.“",
    name: "Liliana Ridziova",
    title: "Konzervatorium",
    image: userFiveImg,
  },
  {
    text: "„Najviac oceňujem, že môžem študovať online, čo mi šetrí čas a poskytuje flexibilitu. Už po pár mesiacoch som si všimla, že sa mi zlepšila gramatika a schopnosť plynulo rozprávať.“",
    name: "Gabrielle Winn",
    title: "Co-founder of Acme Inc",
    image: userSixImg,
  },
];

export const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);


  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect); // Trigger on scroll
  }, [emblaApi, onSelect]);

  // Autoplay effect
  useEffect(() => {
    const autoplay = setInterval(scrollNext, 7000);
    return () => clearInterval(autoplay);
  }, [scrollNext]);



  return (
    <Container>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-1 sm:px-10"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between h-full bg-gray-100 border border-[#36313d] sm:px-14 px-4 rounded-2xl py-4 sm:py-14 dark:bg-transparent">
                <p className={`${alternativeFont} italic w-full sm:w-1/2 text-2xl leading-normal`}>
                  {testimonial.text}
                </p>
                <Avatar
                  image={testimonial.image}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-6 mr-2 sm:mr-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-4 h-4 rounded-full border-2 transition-colors 
                        ${index === selectedIndex ? "bg-transparent" : "opacity-50"}
                        ${index === selectedIndex ? "border-black dark:border-white" : "border-[#36313d]"}`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>


    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar({ image, name, title }: AvatarProps) {
  return (
    <div className="flex flex-row mt-4 sm:flex-col space-x-2  items-center w-full sm:w-1/2  ">
      <div className="flex-shrink-0 overflow-hidden  w-16 h-16">
        <Image
          src={image}
          width={40}
          height={40}
          alt="Avatar"
          placeholder="blur"
          className="rounded-full w-full"
        />
      </div>
      <div>
        <div className="text-2xl font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
}
