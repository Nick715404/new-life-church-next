import Image from 'next/image';
import styles from './styles.module.scss';

export const Leaders = () => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<div className=''>
					<h2 className={styles.title}>Лидеры проекта ГДБ</h2>
					<div className={styles.wrapper}>
						<div className={styles.item}>
							<div className={styles.imageBox}>
								<Image
									fill
									className={styles.image}
									src='/img/yfg/anton-kristina.jpg'
									alt='Антон и Кристина Чернявские'
								/>
							</div>
							<h3 className={styles.name}>Антон и Кристина Чернявские</h3>
							<p className={styles.text}>
								Антон — подростковый пастор церкви и ответственный за
								медиа-служение, Кристина — ивент-менеджер церкви, вместе прошли
								16-й проект «Год для Бога» в Москве, и после возвращения открыли
								аналогичный проект в Челябинске
							</p>
						</div>
						<div className={styles.item}>
							<div className={styles.imageBox}>
								<Image
									fill
									className={styles.image}
									src='/img/yfg/sasha-natali.jpg'
									alt='Александр и Натали Окуневы'
								/>
							</div>
							<h3 className={styles.name}>Александр и Натали Окуневы</h3>
							<p className={styles.text}>
								Александр — молодежный пастор церкви, ответственный за весь
								ивент отдел, Натали — исполнительный директор церкви. Вместе в
								браке уже больше 10 лет, есть 3 детей. Вместе прошли 7-й проект
								«Год для Бога» в Москве.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
