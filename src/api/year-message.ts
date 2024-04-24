import { IQueryFromStrapi } from "@/interfaces/queries";
import { getOptions } from "./options";
import { IYearMessage } from "@/interfaces/year-message";

export const fetchYearMessage = async () => {
  const options = getOptions('GET');

  try {
    const response = await fetch(`${process.env.STRAPI_URL}/message-for-years?populate=*`, {
      ...options,
      cache: 'force-cache',
      next: {revalidate: 60 * 5}
    });

    if (!response.ok) throw new Error('Failed while fetching year message!');

    const { data }: IQueryFromStrapi<IYearMessage> = await response.json();
    return data[0];
  } catch (error: any) {
    throw new Error(error.message);
  }
};