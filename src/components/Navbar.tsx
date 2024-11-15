"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { House, Briefcase, Info, Money, PhoneDisconnect } from "phosphor-react"; // Import ikony

export const Navbar = () => {
  const navigation = [
    { name: "Domov", href: "hero", icon: House },
    { name: "Služby", href: "benefits", icon: Briefcase },
    { name: "O nás", href: "about", icon: Info },
    { name: "Cenník", href: "cost", icon: Money },
    { name: "Kontakt", href: "contact", icon: PhoneDisconnect },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Horná navigácia pre desktop */}
      <div
        className={`w-full fixed cursor-pointer top-0 left-0 z-50 ${isScrolled
            ? "bg-[#00242F] bg-opacity-50 backdrop-blur-lg shadow-md"
            : "bg-transparent"
          } transition-all duration-900 ease-in`}
      >
        <nav className="container flex items-center justify-between p-4 mx-auto lg:justify-between xl:px-1">
          <Link href="/">
            <span className="flex items-center space-x-1 text-xl sm:text-2xl font-medium text-black dark:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 186.26 209.43"
                width="40"
                height="40"
                className="text-black dark:text-white"
              >
                <g>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="22"
                    d="M10.13,198.32c21.62,0,43.31-.5,64.92.07,19.71.52,39.13-4.25,55.87-14.85,31.17-19.73,48.22-55.89,43.6-92.41-2.3-18.19-9.52-36.01-21.56-49.95-12.01-13.9-28.6-23.78-46.51-27.83-11.22-2.54-22.77-2.35-34.2-2.35-20.41,0-40.82,0-61.23,0h-.87"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="22"
                    d="M20.81,32.91v129.97c21.71,0,43.59.82,65.27.07,15.54-.54,29.99-9.56,39.45-21.55,8.58-10.88,13.79-24.47,14.21-38.32.42-13.85-4.02-27.87-12.69-38.68-10.6-13.21-26.5-20.59-43.23-20.49-10.32.06-20.63,0-30.95,0v92.81"
                  />
                </g>
              </svg>
              <span>DeutschSpracheReise</span>
            </span>
          </Link>
          <ThemeChanger />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="px-2 py-1 ml-10 lg:hidden">
                  {open ? (
                    <svg className="w-6 h-6" /* ikonka zatvorenia */ />
                  ) : (
                    <svg className="w-6 h-6" /* ikonka menu */ />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col bg-[#222] rounded-xl p-6 lg:hidden">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="text-gray-200 py-4"
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="hidden lg:flex w-3/5">
            <ul className="flex justify-end list-none flex-1">
              {navigation.map((item) => (
                <li key={item.name} className="mr-3">
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={1500}
                    className="px-4 py-2 text-lg text-black dark:text-gray-200"
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

      {/* Spodná navigácia pre mobilné zariadenia */}
      <div className="fixed bottom-0 left-0 w-[80%] h-16 bg-[#015C75] lg:hidden z-50 rounded-tr-full ">
        <nav className="flex justify-around items-end align-middle my-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={1500}
                className="flex flex-col items-center text-gray-200"
                activeClass="relative bottom-3 scale-125 p-1 rounded-t-full bg-[#015C75] "
                offset={-70}
                spy={true}
              >
                <Icon size={24} />
                <span className="text-xs">{item.name}</span>
              </ScrollLink>
            );
          })}
        </nav>
      </div>
    </>
  );
};
