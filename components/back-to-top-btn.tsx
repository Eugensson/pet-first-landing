"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TbChevronsUp } from "react-icons/tb";
import { animateScroll as scroll } from "react-scroll";

export const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed right-8 bottom-16 z-10 size-20 flex justify-center items-center bg-accent text-orange rounded-sm cursor-pointer"
        >
          <div className="relative">
            <Image
              src="/assets/footer/logo.svg"
              width={200}
              height={200}
              alt="Logo dog footprint"
              className="object-cover aspect-square"
            />
            <TbChevronsUp
              size={30}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white animate-bounce"
            />
          </div>
        </button>
      )}
    </>
  );
};
