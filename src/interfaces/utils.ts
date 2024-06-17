import { CONTACT_INFO } from "@/seo/constants";
import { INavLink } from "./links";

export interface ILinksBlocks<T> {
  big: {
    label: string
  },
  topLeft: T
  topRight: T,
  bottomLeft: T,
  bottomRight: T,
}

export interface ILinkInBlock {
  href: string;
  label: string;
}

export interface IInfoTab {
  number: number;
  subtitle: string;
  text: string;
  icon: string;
}

export interface IFoudationData {
  id: number;
  title: string;
  text: string;
}

export interface IFooterAccordion {
  links: INavLink[],
  contacts: typeof CONTACT_INFO,
};