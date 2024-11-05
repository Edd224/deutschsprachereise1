import React from "react";
import { Container } from "@/components/Container";
import localFont from "next/font/local";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}


const alternativeFont = localFont({ 
  src: '../app/font/AL_LePORSCHE_PersonalUseOnly.otf'
})



export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-10  ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        <div className="text-sm font-bold mt-16 text-[#015C75] uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className= {`max-w-2xl mt-3 text-2xl font-bold  text-gray-800  lg:text-3xl dark:text-white`}>
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg  text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

