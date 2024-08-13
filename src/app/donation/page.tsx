import { paymentInfoAccordion } from '@/shared/constants';
import { Hero } from '@/widgets/sections/contacts';
import styles from './page.module.scss';
import { halvar } from '@/constants/fonts';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Пожертвование',
	alternates: {
		canonical: `${process.env.SITE_DOMEN}/donation`,
	},
};

const DonationPage = () => {
	return (
		<main className='donation children-page'>
			<Hero />

			<section className={styles.payment}>
				<div className='container'>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={`${halvar.className} ${styles.title}`}>
								QR-код для пожертвований
							</h2>
							<span className={styles.recovery}>
								Возврат пожертвований не осуществляется.
							</span>
							<Link className={styles.link} href='/docs'>
								Процесс передачи данных
							</Link>
							<p className={styles.text}>
								* Пожертвование происходит через авторизационный сервер <br />
								Процессингового центра Банка с использованием банковских <br />
								кредитных карт следующих платежных систем.
							</p>
						</div>
						<div className={styles.imgBox}>
							<Image
								className={styles.qrCode}
								width={330}
								height={330}
								src='/img/png/donation-qr.jpg'
								alt='Пожертвуйте через этот QR-код'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.info}>
				<div className='container'>
					<div className={styles.wrapper}>
						<h2 className={`${styles.title} ${halvar.className}`}>
							Реквизиты для пожертвования
						</h2>
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
};

export default DonationPage;
