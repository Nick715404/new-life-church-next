import { IStrapiImage } from "./queries"

export interface IEvent {
  title: string
  description: string
  slug: string
  reg_text: string
  reg_price: number,
  isPriceIncrease: boolean,
  increased_price: string | null
  increased_text: string | null,
  createdAt: string
  updatedAt: string,
  publishedAt: string,
  background: { data: IStrapiImage },
  gallery?: { data: any }
}