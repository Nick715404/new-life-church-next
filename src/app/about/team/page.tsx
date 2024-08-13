import { Pastors } from '@/widgets/sections/about/team';
import { Hero } from '@/widgets/sections/contacts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Команда',
	alternates: {
		canonical: `${process.env.SITE_DOMEN}/about/team`,
	},
};

export default function About() {
	return (
		<main className='team children-page'>
			<Hero />
			<Pastors />
		</main>
	);
}
