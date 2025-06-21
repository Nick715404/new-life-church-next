import styles from './styles.module.scss';

export const About = () => {
	return (
		<div className='container'>
			<div className={styles.contentWrapper}>
				<div className={styles.mainContent}>
					<div className={styles.textContent}>
						<p className={styles.buttonsWrapper}>
							<a
								href='https://forms.yandex.ru/cloud/683589d5068ff03ddcb6f227'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className={styles.primaryButton}>
									Заполнить анкету
								</button>
							</a>
							<a
								href='https://forms.yandex.ru/cloud/68358fa090fa7b3ee1f38e87'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className={styles.primaryButton}>
									Заполнить рекомендацию пастора
								</button>
							</a>
						</p>

						<p className={styles.regularText}>
							«Год для Бога» — проект всесторонней подготовки лидеров для
							служения в поместных церквях. Это развитие характера, приобретение
							практических навыков через служение в разных отделах церкви «Слово
							жизни» Челябинск, а также получение теоретических знаний во время
							Библейских семинаров.
						</p>

						<p className={styles.regularText}>
							Третий поток проекта «Год для Бога» будет проходить с 3 сентября
							2025 по 16 августа 2026 года.
						</p>

						<p className={styles.regularText}>
							За этот год участники проекта научатся:
						</p>

						<ul className={styles.benefitsList}>
							<li className={styles.benefitItem}>Работать в команде</li>
							<li className={styles.benefitItem}>
								- Организовывать людей вокруг проекта или служения
							</li>
							<li className={styles.benefitItem}>
								- Решать вопросы любой сложности
							</li>
							<li className={styles.benefitItem}>
								- Понимать и исполнять видение поместной церкви
							</li>
							<li className={styles.benefitItem}>
								- Быть инициативными и дисциплинированными
							</li>
							<li className={styles.benefitItem}>
								- Строить отношения с разными людьми, быть коммуникабельными
							</li>
						</ul>

						<p className={styles.regularText}>
							Если вы хотите полностью окунуться в служение — это ваше время и
							ваш год. Мы научим вас всему, что знаем и умеем сами.
						</p>
					</div>
				</div>

				<div className={styles.contactBlock}>
					<div className={styles.contactTitle}>Остались вопросы?</div>
					<div className={styles.contactLinks}>
						<a
							target='_blank'
							className={styles.contactLink}
							href='https://t.me/kris_chernyavskaya'
						>
							<EmailIcon />
							<span className={styles.contactText}>Напишите нам</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const EmailIcon = () => (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={styles.emailIcon}
	>
		<path
			d='M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z'
			fill='transparent'
		/>
		<g clipPath='url(#clip0_762_29565)'>
			<path
				d='M26.6668 17.0233V23.3333C26.6669 23.8435 26.4719 24.3343 26.122 24.7055C25.772 25.0767 25.2934 25.3001 24.7842 25.33L24.6668 25.3333H15.3335C14.8234 25.3333 14.3325 25.1384 13.9613 24.7885C13.5902 24.4385 13.3668 23.9599 13.3368 23.4506L13.3335 23.3333V17.0233L19.6302 21.2213L19.7075 21.2653C19.7986 21.3098 19.8987 21.333 20.0002 21.333C20.1016 21.333 20.2017 21.3098 20.2928 21.2653L20.3702 21.2213L26.6668 17.0233Z'
				fill='#FFBA0D'
			/>
			<path
				d='M24.6666 14.6667C25.3866 14.6667 26.0179 15.0467 26.3699 15.618L19.9999 19.8647L13.6299 15.618C13.797 15.3465 14.0267 15.119 14.2997 14.9543C14.5727 14.7896 14.8811 14.6926 15.1992 14.6714L15.3332 14.6667H24.6666Z'
				fill='#FFBA0D'
			/>
		</g>
		<defs>
			<clipPath id='clip0_762_29565'>
				<rect
					width='16'
					height='16'
					fill='white'
					transform='translate(12 12)'
				/>
			</clipPath>
		</defs>
	</svg>
);
