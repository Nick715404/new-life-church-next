import { ILastSermon } from "./last-sermons"

export interface IQueryFromStrapi<T> {
  data: IDataFromStrapi<T>[],
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}

export interface IDataFromStrapi<I> {
  id: number;
  attributes: I;
}

export interface IStrapiImage {
  id: number,
  attributes: {
    name?: string
    alternativeText?: string | null,
    caption?: string | null,
    width?: number,
    height?: number,
    formats?: {
      thumbnail?: {
        name?: string
        hash?: string
        ext?: string
        mime?: string
        path?: string | null
        width?: number
        height?: number
        size?: number
        sizeInBytes?: number
        url: string
      },
      small?: {
        name: string
        hash: string
        ext: string
        mime: string
        path: string | null
        width: number
        height: number
        size: number
        sizeInBytes: number
        url: string
      },
      medium?: {
        name: string
        hash: string
        ext: string
        mime: string
        path: string | null
        width: number
        height: number
        size: number
        sizeInBytes: number
        url: string
      },
      large: {
        name: string
        hash: string
        ext: string
        mime: string
        path: string | null
        width: number
        height: number
        size: number
        sizeInBytes: number
        url: string
      }
    },
    hash?: string
    ext?: string
    mime?: string
    size?: number
    url: string
    previewUrl?: string | null,
    provider?: string
    provider_metadata?: any | null,
    createdAt?: string
    updatedAt?: string
  }
}