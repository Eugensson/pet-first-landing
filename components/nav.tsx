import Link from "next/link";

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
      {navItems.map(({ name, href }) => (
        <li key={name} className={itemsStyle}>
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
