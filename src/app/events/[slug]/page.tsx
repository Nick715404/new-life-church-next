import { Metadata } from "next";
import { fetchSingleEvent } from "@/api/events";
import { Gallery } from "@/components/Gallery/Gallery";
import { EventHero, EventSpeakers, Schedule } from "@/sections/event";
import { DonationBanner } from "@/components/DonationBanner/DonationBanner";

type EventPageProps = { params: { slug: string, }, };

export async function generateMetadata({ params: { slug } }: EventPageProps): Promise<Metadata> {
  const { attributes: data } = await fetchSingleEvent(slug);

  return {
    title: data.title,
    description: data.description,
  };
};

export default async function EventPage({ params: { slug } }: EventPageProps) {
  const { attributes: data } = await fetchSingleEvent(slug);

  return (
    <div className="event children-page">
      <EventHero description={data.description} title={data.title} />
      <EventSpeakers speakers={data.speakers} />
      {/* <Schedule schedule={data.schedules.data} /> */}
      <Gallery gallery={data.gallery.data} />
      {/* <DonationBanner
        increasedPrice={data.increase_price}
        increasedDate={data.increase_date}
        price={data.reg_price} /> */}
    </div>
  );
};