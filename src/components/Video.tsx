"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/logoDeutscheWhiteAnim.svg";


export function Video() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Container>
      <div className="relative w-full h-[500px] mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-[#015C75] cursor-pointer bg-gradient-to-tr from-[#e2e8e4] to-[#96c7c3] dark:from-[#242444c4] dark:to-[#080808d8]">
        {!playVideo && (
          <button
            onClick={() => setPlayVideo(!playVideo)}
            className="absolute inset-auto w-16 h-16 text-[#015C75] transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16  lg:w-28 lg:h-28"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Play Video</span>
          </button>
        )}
        {playVideo && (
          <video
            src="/video/videoLearning.mp4"
            controls
            autoPlay
            className="w-full h-full object-cover"
          ></video>
        )}
      </div>
    </Container>
  );
}
