import { IStrapiImage } from "./queries"
import { ISpeaker } from "./speakers";

export interface IEvent {
  title: string;
  description: string;
  slug: string;
  reg_price: number;
  increase_date: string;
  increase_price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  event_type: 'ukv' | 'youthUral' | 'teensUral' | 'bussiness';
  background: { data: IStrapiImage };
  gallery?: { data: any };
  speakers: { data: ISpeaker };
}