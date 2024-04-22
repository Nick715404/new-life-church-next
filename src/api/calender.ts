import { IQueryFromStrapi } from "@/interfaces/queries";
import { getOptions } from "./options";
import { ICalendar } from "@/interfaces/calendar";

export const fetchAllCalendarEvents = async () => {
  const options = getOptions('GET');

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/calendars`, options);

    if (!response.ok) throw new Error('Failed while fetching calendar events');

    const data: IQueryFromStrapi<ICalendar> = await response.json()
    return data;
  } catch (error) {

  }
};