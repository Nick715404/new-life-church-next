import { getOptions } from "./options";

export const fetchEvents = async (path: string) => {

  const options = getOptions('GET');

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/${path}`, options);

    if (!response.ok) throw new Error('Error to fetch events');

    const data = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('Error to fetch events');
  }
};