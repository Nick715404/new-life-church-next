import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { halvar } from '@/constants/fonts';
import { YouthMgnForm } from '@/components/Forms';
import { SchedulesItem, SpeakersSwiper } from '@/widgets/youth-mgn/ui';

import styles from './styles.module.scss';

export const metadata: Metadata = {
	title: 'ЮС Магнитогорск | Регистрация на мероприятие',
};

export default function YouthMagnitPage() {
	return (
		<main className='children-page'>
			<section className={styles.hero}>
				<div className='container'>
					<div className=''>
						<h1 className={`${styles.title} ${styles.only_sr}`}>
							Регистрация на конференцию ЮС Магнитогорск 2025
						</h1>
						<div className={styles.content}>
							<div className={styles.titleBox}>
								<h1 className={`${styles.title} ${halvar.className}`}>ЮС</h1>
								<span className={styles.subtitle}>Магнитогорск 2025</span>
							</div>
							<span className={`${styles.dates} ${halvar.className}`}>
								23-25 мая
							</span>
							<Link
								href='#register'
								className={`${styles.btn} ${halvar.className}`}
							>
								Регистрация
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						fill
						alt=''
						priority
						quality={70}
						className={styles.img}
						style={{ objectFit: 'cover', zIndex: 0 }}
						src='/img/youth-magnit/youth-mgn.jpg'
					/>
				</div>
				<div className={styles.filter}></div>
			</section>

			<section className={styles.speakers}>
				<div className={styles.wrapper}>
					<div className={styles.leftBox}>
						<div className=''>
							<h2 className={`${halvar.className} ${styles.title}`}>
								Спикеры конференции
							</h2>
							<p className={styles.text}>
								На конференции спикеры поделятся своими откровениями от Господа
								и высвободят Божье слово в нашу жизнь. Будет мощно!
							</p>
						</div>
					</div>
					<div className={styles.rightBox}>
						<SpeakersSwiper />
					</div>
				</div>
			</section>

			<section className={styles.schedules}>
				<div className=''>
					<h2 className={`${styles.title} ${halvar.className}`}>Расписание</h2>
					<p className={styles.subtitle}>
						Ознакомьтесь с расписанием всей конференции и мероприятиями, которые
						вас ждут!
					</p>
				</div>
				<div className={styles.scheduleBox}>
					<div className={styles.scheduleTitle}>23 мая / пятница</div>
					<SchedulesItem
						time='19:00'
						speaker='Александр Окунев'
						event='Открытие ЮС Магнитогорск'
					/>
					<div className={styles.scheduleTitle}>24 мая / суббота</div>
					<SchedulesItem event='Молитва' speaker='' time='10:00' />
					<SchedulesItem event='Семинары' speaker='' time='11:30' />
					<SchedulesItem event='Перерыв' speaker='' time='13:00' />
					<SchedulesItem
						time='15:00'
						speaker='Алексей Пластинин'
						event='Дневное богослужение'
					/>
					<SchedulesItem
						time='18:00 '
						speaker='Армен Асатрян'
						event='Вечернее богослужение'
					/>
				</div>
			</section>

			<section id='register' className={styles.register}>
				<div className={styles.wrapper}>
					<div className={`${styles.box} ${styles.left}`}>
						<h2 className={`${styles.title} ${halvar.className}`}>
							Добровольное пожертвование
						</h2>
						<p className={styles.text}>
							Спасибо за ваше щедрое сердце. Увидимся на конференции!
						</p>
					</div>
					<div className={`${styles.box} ${styles.right}`}>
						<YouthMgnForm />
					</div>
				</div>
			</section>
		</main>
	);
}
