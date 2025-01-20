import styles from './styles.module.scss';
import { halvar } from '@/constants/fonts';
import { fetchNearEvents } from '@/api/events';
import { NearEventsSwiper } from '@/components/swipers/ui';

export const NearEvents = async () => {
	const events = await fetchNearEvents();

	if (!events || events.length === 0) return null;

	return (
		<section className={styles.nearEventsSection}>
			<div className='container'>
				<div className={styles.wrapper}>
					<h2 className={`${halvar.className} ${styles.title}`}>
						Ближайшие события
					</h2>
					<div className={styles.swiper}>
						<NearEventsSwiper items={events} />
					</div>
				</div>
			</div>
		</section>
	);
};
