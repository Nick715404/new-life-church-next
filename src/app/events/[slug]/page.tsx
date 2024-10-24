import { Metadata } from 'next';
import { fetchSingleEvent } from '@/api/events';
import { Gallery } from '@/components/Gallery/Gallery';
import { EventHero, EventSpeakers, Schedule } from '@/sections/event';
import { DonationBanner } from '@/components/DonationBanner/DonationBanner';
import { BigDescription } from '@/components/BigDescription/BigDescription';

type EventPageProps = { params: { slug: string } };

export async function generateMetadata({
	params: { slug },
}: EventPageProps): Promise<Metadata> {
	const { attributes: data } = await fetchSingleEvent(slug);

	return {
		title: data.title,
		description: data.small_description,
		alternates: {
			canonical: `${process.env.SITE_DOMEN}/about/events/${data.slug}`,
		},
	};
}

export default async function EventPage({ params: { slug } }: EventPageProps) {
	const { attributes: data } = await fetchSingleEvent(slug);

	return (
		<main className='event children-page'>
			<EventHero
				description={data.small_description}
				title={data.title}
				background={data.background.data}
			/>
			<BigDescription data={data.full_description} />
			<EventSpeakers speakers={data.speakers} />
			<Schedule schedule={data.schedules.data} />
			<Gallery gallery={data.gallery.data} />
			<DonationBanner data={data.event_items.data} />
		</main>
	);
}
