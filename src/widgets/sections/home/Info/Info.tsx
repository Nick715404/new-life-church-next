import styles from './Info.module.scss';

import { YearMessage } from '@/components/YearMessage/YearMessage';
import { LastSpeeches } from '@/components/LastSpeeches/LastSpeeches';
import { Calendar } from '@/components/Calendar/Calendar';
import { halvar } from '@/shared/constants/fonts';
import { MotionBox } from '@/components/MotionBox';

const InfoSection = () => {
	return (
		<section className={styles.section}>
			<div className='container-small'></div>
			<div className='container'>
				<MotionBox>
					<h2 className={`${styles.title} ${halvar.className}`}>
						Послание
						<br /> на год
					</h2>
				</MotionBox>
				<div className={styles.wrapper}>
					<div className={styles.videos}>
						<MotionBox delay={0.2}>
							<YearMessage />
						</MotionBox>
						<LastSpeeches />
					</div>
					<div className={styles.calendar}>
						<Calendar />
					</div>
				</div>
			</div>
		</section>
	);
};

export { InfoSection };
