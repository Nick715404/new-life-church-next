import styles from './About.module.scss';
import { halvar } from '@/shared/constants/fonts';
import { InfoTabs } from '@/components/InfoTabs/InfoTabs';
import { HISTORY_DATA } from '@/shared/constants/utils';
import { MotionBox } from '@/components/MotionBox';

const About = () => {
	return (
		<section className={styles.section}>
			<div className='container-small'>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<MotionBox>
							<h2 className={`${styles.title} ${halvar.className}`}>Начало</h2>
						</MotionBox>
						<MotionBox delay={0.1}>
							<p className={styles.text}>
								Церковь основана в 1992 году. Сейчас имеет свое здание с залом
								на 800 мест, христианскую школу и реабилитационный центр.
								Церковь «Новая Жизнь» появилась 5 января 1992 года через
								служение пастора Байдимирова Николая Сергеевича.В 1995 году
								администрация города Челябинска выделила церкви здание в центре
								города. Здание, которому cвыше 120 лет, было реконструировано и
								к нему еще пристроен зал на 800 мест.
							</p>
						</MotionBox>
					</div>
					<div className={styles.tabs}>
						{/* <InfoTabs data={HISTORY_DATA} /> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export { About };
