import styles from './styles.module.scss';

export const ContactUs = () => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Остались вопросы?</h2>
					<span className={styles.text}>⬇️ Напиши сюда ⬇️</span>
					<a
						target='_blank'
						className={styles.link}
						href='https://t.me/kris_chernyavskaya'
					>
						@kris_chernyavskaya
					</a>
				</div>
			</div>
		</section>
	);
};
