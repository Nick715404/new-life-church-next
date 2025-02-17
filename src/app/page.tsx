import styles from './page.module.scss';

import { LinkBanner } from '@/components/LinkBanner/LinkBanner';
import { halvar } from '@/constants/fonts';
import {
	Hero,
	Events,
	InfoSection,
	Meetings,
	JoinUs,
	NearEvents,
} from '@/sections/home/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Главная - Церковь Слово Жизни г. Челябинск',
	alternates: {
		canonical: `${process.env.SITE_DOMEN}`,
	},
};

export default function HomePage() {
	return (
		<main className='home children-page'>
			<Hero />
			<div className={styles.whiteBox}>
				<Meetings />
				<InfoSection />
				<NearEvents />
				<Events />
				<LinkBanner
					path='/contacts'
					title='У вас есть молитвенная нужда или свидетельство?'
				/>
				<JoinUs />
			</div>
		</main>
	);
}
