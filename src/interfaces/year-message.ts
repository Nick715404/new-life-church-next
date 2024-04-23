import { IStrapiImage } from "./queries";

export interface IYearMessage {
  createdAt?: string;
  link: string;
  updatedAt?: string;
  thumbnail: { data: IStrapiImage }
}