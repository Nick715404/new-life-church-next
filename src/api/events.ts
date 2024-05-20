import { IQueryFromStrapi } from "@/interfaces/queries";
import { getOptions } from "./options";
import { IEvent } from "@/interfaces/events";

export const fetchEvents = async () => {

  const options = getOptions('GET');

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/events?populate=*`, {
      ...options,
      next: { revalidate: 180 }
    });

    if (!response.ok) throw new Error('Error to fetch events');

    const { data }: IQueryFromStrapi<IEvent> = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('Error to fetch events');
  }
};

export const fetchSingleEvent = async (slug: string) => {

  const options = getOptions('GET');
  console.log(slug);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/event/${slug}`, {
      ...options,
      next: { revalidate: 360 }
    });

    // if (!response.ok) throw new Error('Error to fetch event');

    const { data }: IQueryFromStrapi<IEvent> = await response.json();
    console.log(data);

    // return data;
  }
  catch (error) {
    // throw new Error('Error to fetch event');
  }
};