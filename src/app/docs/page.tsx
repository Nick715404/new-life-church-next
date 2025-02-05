import { MotionBox } from '@/components/MotionBox';
import styles from './page.module.scss';
import { halvar } from '@/constants/fonts';
import { Metadata } from 'next';
import { paymentInfoAccordion } from '@/constants/accordion';

export const metadata: Metadata = {
	title: 'Документы - Церковь Слово Жизни г. Челябинск',
	alternates: {
		canonical: `${process.env.SITE_DOMEN}/docs`,
	},
};

export default function DocsPage() {
	return (
		<main className='docs children-page'>
			<section className={styles.docs}>
				<div className='container'>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<MotionBox delay={0.2}>
								<span className={styles.subtitle}>документы</span>
							</MotionBox>
							<MotionBox>
								<h1 className={`${styles.title} ${halvar.className}`}>
									Юридическая <br /> документация
								</h1>
							</MotionBox>
						</div>
						<div className={styles.linkList}>
							<MotionBox delay={0.3}>
								<a
									className={styles.link}
									target='_blank'
									href='/docs/ustav.pdf'
								>
									Устав
								</a>
							</MotionBox>
							<MotionBox delay={0.4}>
								<a
									className={styles.link}
									target='_blank'
									href='/docs/privacy.pdf'
								>
									Персональные данные
								</a>
							</MotionBox>
							<MotionBox delay={0.5}>
								<a
									className={styles.link}
									target='_blank'
									href='/docs/public-offer.pdf'
								>
									Публичная оферта о заключении <br /> договора пожертвований
								</a>
							</MotionBox>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.info}>
				<div className='container'>
					<div className={styles.wrapper}>
						<h2 className={`${styles.title} ${halvar.className}`}>Реквизиты</h2>
						<div className={styles.listBox}>
							<ul className={styles.List}>
								{paymentInfoAccordion.map(item => (
									<li className={styles.item} key={item.id}>
										<b>{item.title}:</b> {item.description}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
