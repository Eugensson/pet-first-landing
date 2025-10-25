import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type NavItem = {
  name: string;
  href: string;
};

export type Pet = {
  id: string;
  category: string;
  name: string;
  image: StaticImport;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image: StaticImport;
};
