import { IQueryFromStrapi } from "@/interfaces/queries";
import { getOptions } from "./options";
import { ILastSermon } from "@/interfaces/last-sermons";

export const fetchAllLastSpeeches = async () => {
  const options = getOptions('GET');

  try {
    const response = await fetch(`${process.env.STRAPI_URL}/last-speeches`, {
      ...options,
      next: { revalidate: 60 * 3 }
    });

    if (!response.ok) throw new Error('Failed white fetching last speeches');

    const data: IQueryFromStrapi<ILastSermon> = await response.json();

    return data.data;
  } catch (error) {
    throw new Error('Failed white fetching last speeches');
  }
}