import { ISchedule } from "@/interfaces/events";

type useDateProps = { data: ISchedule[], };

export function useDate({ data }: useDateProps) {

  const groupedEvents = data.reduce((acc, event) => {
    const date = event.attributes.date;
    if (!acc[date]) acc[date] = [];

    acc[date].push(event);

    return acc;
  }, {} as Record<string, ISchedule[]>);

  return { groupedEvents };
};