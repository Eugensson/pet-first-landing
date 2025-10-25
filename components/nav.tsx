import Link from "next/link";

import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

export const Nav = ({ className }: { className?: string }) => {
  return (
    <ul
      className={cn("flex items-center gap-x-4 lg:gap-x-12 text-lg", className)}
    >
      {navItems.map(({ name, href }) => (
        <li key={name}>
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
