"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const navigation = [
    { name: "Domov", href: "hero" },
    { name: "Služby", href: "benefits" },
    { name: "O nás", href: "about" },
    { name: "Cenník", href: "cost" },
    // { name: "Kontakt", href: "contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full transition-all duration-500 fixed top-0 left-0 z-50 ${isScrolled ? 'bg-[#181d22] bg-opacity-50 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1">
        <a href="/">
          <span className="flex space-x-1 items-center text-xl sm:text-2xl font-medium text-black dark:text-gray-100">
            <span className="bg-[#0f0a08] ">
              <Image className="p-[5px]" src="/img/logo.svg" width="40" height="40" alt="Logo" />
            </span>
            <span className="">eutschSpracheReise</span>
          </span>
        </a>

        <ThemeChanger />

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="px-2 py-1 ml-10 text-black dark:text-white rounded-md lg:hidden hover:text-indigo-500 focus:text-white">
                {open ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-col justify-center bg-[#222] rounded-xl w-full  h-[300px] my-5 p-6 lg:hidden">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={1000}
                    className="px-4 py-4 text-lg font-normal text-gray-200 cursor-pointer border-l-2 "
                    activeClass="border-l-2 border-transparent"
                    spy={true}
                    offset={-10}
                  >
                    {item.name}
                  </ScrollLink>))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center w-3/5">
          <ul className="flex items-center justify-end flex-1 list-none">
            {navigation.map((item) => (
              <li key={item.name} className="mr-3 nav__item">
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="px-4 py-2 text-lg font-normal text-black dark:text-gray-200 cursor-pointer"
                  activeClass=""
                  spy={true}
                  offset={-70}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
