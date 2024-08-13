import { IStrapiImage } from "./queries";

export interface ILastSermon {
  createdAt?: string;
  link: string;
  updatedAt?: string;
  thumbnail: {
    data: ILastSermonThumbnail
  }
}

export interface ILastSermonThumbnail {
  id: number,
  attributes: {
    name: string,
    alternativeText: null | string,
    caption: null | string,
    width: number,
    height: number,
    formats: [Object],
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: null | string,
    provider: string,
    provider_metadata: null | string,
    createdAt: string,
    updatedAt: string
  }
}