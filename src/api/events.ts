import { IQueryFromStrapi } from "@/interfaces/queries";
import { getOptions } from "./options";
import { IEvent } from "@/interfaces/events";

export const fetchEvents = async () => {

  const options = getOptions('GET');

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/events?populate=*`, {
      ...options,
      next: { revalidate: 60 * 2 }
    });

    if (!response.ok) throw new Error('Error to fetch events');

    const { data }: IQueryFromStrapi<IEvent> = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('Error to fetch events');
  }
};