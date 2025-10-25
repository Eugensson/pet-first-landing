"use client";

import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

interface NavProps {
  listStyle?: string;
  itemsStyle?: string;
}

export const Nav = ({ listStyle, itemsStyle }: NavProps) => {
  return (
    <ul
      className={cn("flex items-center gap-x-4 lg:gap-x-12 text-lg", listStyle)}
    >
      {navItems.map(({ name, path, offset }) => (
        <li key={name} className={itemsStyle}>
          <ScrollLink
            spy
            smooth
            to={path}
            duration={500}
            delay={50}
            offset={offset}
            className="cursor-pointer"
          >
            {name}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
};
