import styles from './Questions.module.scss';
import { Accordion } from '@/components/Accordion/Accordion';
import { contactsAccordion } from '@/shared/constants/accordion';
import { MotionBox } from '@/components/MotionBox';
import { halvar } from '@/constants/fonts';

const Questions = () => {
	return (
		<section className={styles.section}>
			<div className='container-small'>
				<div className={styles.wrapper}>
					<MotionBox className={styles.titleBox}>
						<h2 className={`${styles.title} ${halvar.className}`}>
							Есть
							<br /> вопросы?
						</h2>
					</MotionBox>
					<div className={styles.accordionBox}>
						<Accordion data={contactsAccordion} />
					</div>
				</div>
			</div>
		</section>
	);
};

export { Questions };
