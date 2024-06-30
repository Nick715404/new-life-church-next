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
};

export interface ILinkInBlock {
  href: string,
  label: string,
};

export interface IInfoTab {
  number: number,
  subtitle: string,
  text: string,
  icon: string,
};

export interface IFoudationData {
  id: number,
  title: string,
  text: string,
};

export interface IFooterAccordion {
  links: INavLink[],
  contacts: typeof CONTACT_INFO,
};

// interfaces/utils.ts

export interface TextElement {
  type: 'text';
  text: string;
}

export interface LinkElement {
  type: 'link';
  url: string;
  children: TextElement[];
}

export interface ListItemElement {
  type: 'list-item';
  children: TextElement[];
}

export interface HeadingElement {
  type: 'heading';
  level: number;
  children: (TextElement | LinkElement)[];
}

export interface ListElement {
  type: 'list';
  format: 'ordered' | 'unordered';
  children: ListItemElement[];
}

export interface ParagraphElement {
  type: 'paragraph';
  children: (TextElement | LinkElement)[];
}

export type Element = HeadingElement | ListElement | ParagraphElement;

export type IBigDescriptionChildren = Element | ListItemElement | LinkElement | TextElement;

// export type CustomFormData = { [key: string]: any, };
export type CustomFormData = {
  agreement:boolean,
  church: string,
  city: string,
  email:string,
  firstName: string,
  lastName: string,
  phone: string,
};