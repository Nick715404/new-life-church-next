import { fetchSingleEvent } from "@/api/events";
import { EventHero } from "@/sections/event";

type Props = {
  params: {
    slug: string;
  }
}

export default async function EventPage({ params: { slug } }: Props) {
  const { attributes: data } = await fetchSingleEvent(slug);

  return (
    <div className="event children-page">
      <EventHero description={data.description} title={data.title} />
    </div>
  );
};