import { fetchSingleEvent } from "@/api/events";
import { EventHero, EventSpeakers, Schedule } from "@/sections/event";

type EventPageProps = {
  params: { slug: string, },
}

export default async function EventPage({ params: { slug } }: EventPageProps) {
  const { attributes: data } = await fetchSingleEvent(slug);
  console.log(data);
  
  return (
    <div className="event children-page">
      <EventHero description={data.description} title={data.title} />
      <EventSpeakers speakers={data.speakers} />
    </div>
  );
};