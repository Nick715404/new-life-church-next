import { Hero, Questions } from '@/widgets/sections/contacts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Контакты',
	alternates: {
		canonical: `${process.env.SITE_DOMEN}/contacts`,
	},
};

export default function ContactsPage() {
	return (
		<main className='contacts children-page'>
			<Hero />
			<Questions />
		</main>
	);
}
