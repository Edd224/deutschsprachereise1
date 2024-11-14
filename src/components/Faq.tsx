"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-3xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex items-center justify-between w-full px-4 py-4 text-lg text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 ${
                    open ? "bg-[#e2e8e4] dark:bg-[#0f1b19]" : "bg-gray-50 dark:bg-transparent"
                  } text-gray-800 hover:bg-[#d9dfda] dark:text-gray-200`}>
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""} w-6 h-6 text-[#015C75]`}
                    />
                  </Disclosure.Button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <Disclosure.Panel static className="text-lg px-4 pt-4 pb-2 text-black dark:text-gray-300">
                      {item.answer}
                    </Disclosure.Panel>
                  </motion.div>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Ako prebiehajú online kurzy nemčiny ?",
    answer: "Naše kurzy prebiehajú cez videohovory v reálnom čase, kde sa priamo zapájate do výučby. Lektor vedie hodinu interaktívne a môžete klásť otázky, precvičovať konverzáciu a zlepšovať svoje jazykové schopnosti.",
  },
  {
    question: "Potrebujem mať predchádzajúce znalosti nemčiny ?",
    answer: "Nie, ponúkame kurzy pre všetky úrovne. Či ste úplný začiatočník alebo máte pokročilé znalosti, prispôsobíme obsah vášmu aktuálnemu jazykovému stupňu.",
  },
  {
    question: "Aké materiály sú potrebné na kurz ?",
    answer: "Naše kurzy sú vybavené všetkými potrebnými digitálnymi materiálmi, ktoré dostanete priamo od nás. Stačí vám počítač alebo tablet s internetovým pripojením a chuť učiť sa.",
  },
  {
    question: "Je možné prispôsobiť čas lekcií môjmu rozvrhu ?",
    answer: "Áno, ponúkame flexibilné časy výučby, aby sme vyhoveli vášmu osobnému rozvrhu. Môžete si dohodnúť termíny podľa vašich potrieb.",
  },
];
