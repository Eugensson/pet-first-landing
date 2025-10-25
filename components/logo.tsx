"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  isFooter,
}: {
  className?: string;
  isFooter?: boolean;
}) => {
  return (
    <ScrollLink
      smooth
      to="home"
      duration={500}
      delay={50}
      offset={-150}
      className={cn(
        "flex items-end gap-2 cursor-pointer",
        isFooter ? "text-orange" : "text-primary",
        className
      )}
    >
      <Image
        src={`${
          isFooter ? "/assets/footer/logo.svg" : "/assets/header/logo.svg"
        }`}
        width={50}
        height={50}
        alt="Logo dog footprint"
        className="object-cover aspect-square fill-inherit"
      />
      <span className={cn("font-semibold", isFooter ? "text-4xl" : "text-2xl")}>
        Pet-First
      </span>
    </ScrollLink>
    // <Link
    //   href="/"
    //   className={cn(
    //     "flex items-end gap-2",
    //     isFooter ? "text-orange" : "text-primary",
    //     className
    //   )}
    // >

    // </Link>
  );
};
