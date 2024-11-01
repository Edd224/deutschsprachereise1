"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="text-lg px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Ako prebiehajú online kurzy nemčiny?",
    answer: "Naše kurzy prebiehajú cez videohovory v reálnom čase, kde sa priamo zapájate do výučby. Lektor vedie hodinu interaktívne a môžete klásť otázky, precvičovať konverzáciu a zlepšovať svoje jazykové schopnosti.",
  },
  {
    question: "Potrebujem mať predchádzajúce znalosti nemčiny?",
    answer: "Nie, ponúkame kurzy pre všetky úrovne. Či ste úplný začiatočník alebo máte pokročilé znalosti, prispôsobíme obsah vášmu aktuálnemu jazykovému stupňu.",
  },
  {
    question: "Aké materiály sú potrebné na kurz?",
    answer:
      "Naše kurzy sú vybavené všetkými potrebnými digitálnymi materiálmi, ktoré dostanete priamo od nás. Stačí vám počítač alebo tablet s internetovým pripojením a chuť učiť sa.",
  },
  {
    question: "Je možné prispôsobiť čas lekcií môjmu rozvrhu?",
    answer:
      "Áno, ponúkame flexibilné časy výučby, aby sme vyhoveli vášmu osobnému rozvrhu. Môžete si dohodnúť termíny podľa vašich potrieb.",
  },
];
