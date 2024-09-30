import { Hero } from '@/sections/about/foundation/Hero/Hero';
import { Metadata } from 'next';
import { FoundationTabs } from '@/components/FoundationTabs/FoundationTabs';

export const metadata: Metadata = {
	title: 'Основание - Церковь Слово Жизни г. Челябинск',
	alternates: {
		canonical: `${process.env.SITE_DOMEN}/about/foundation`,
	},
};

export default function FoundationPage() {
	return (
		<main className='foundation children-page'>
			<Hero />
			<FoundationTabs />
		</main>
	);
}
