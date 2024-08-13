import styles from './Hero.module.scss';

import Image from 'next/image';
import { ContactsForm } from '@/components/ContactsForm/ContactsForm';
import { MotionBox } from '@/components/MotionBox';
import { halvar } from '@/shared/constants/fonts';
import Link from 'next/link';

const Hero = () => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<MotionBox>
							<h1 className={`${styles.title} ${halvar.className}`}>
								Контакты
							</h1>
						</MotionBox>
						<MotionBox delay={0.1}>
							<address>
								ул. Красноармейская, 57 г. Челябинск
								<br />
								454006 Россия.
							</address>
						</MotionBox>
						<MotionBox delay={0.2}>
							<Link className={styles.phoneLink} href='tel: +73512617001'>
								+7 (351) 261-70-01
							</Link>
						</MotionBox>
						<MotionBox delay={0.3} className={styles.textBox}>
							<p>Ждем Вас на наших Богослужениях!</p>
							<p>
								Воскресенье 10:00; 13:00, 16:00 -<br /> (молодёжное
								богослужение)
							</p>
						</MotionBox>
					</div>
					<MotionBox className={styles.formBox} delay={0.4}>
						<ContactsForm />
					</MotionBox>
				</div>
			</div>
			<Image
				className={styles.background}
				priority
				fill
				src='/img/png/contacts-bg.webp'
				alt='Пожертвовать'
			/>
		</section>
	);
};

export { Hero };
