import { fetchSingleEvent } from "@/api/events";
import { EventHero, EventSpeakers } from "@/sections/event";

type EventPageProps = {
  params: { slug: string, },
}

export default async function EventPage({ params: { slug } }: EventPageProps) {
  const { attributes: data } = await fetchSingleEvent(slug);

  return (
    <div className="event children-page">
      <EventHero description={data.description} title={data.title} />
      <EventSpeakers />
    </div>
  );
};