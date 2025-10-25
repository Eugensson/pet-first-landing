import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";

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

export type Social = {
  label: string;
  icon: IconType;
  href: string;
};
