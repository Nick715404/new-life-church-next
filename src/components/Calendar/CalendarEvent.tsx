import styles from './Calendar.module.scss';

type CalendarEventProps = {
	time: string;
	title: string;
};

export const CalendarEvent = ({ time, title }: CalendarEventProps) => {
	const eventTime = time.split('').slice(0, 5);

	return (
		<div className={styles.event}>
			<div className={styles.timeWrapper}>
				<span className={styles.time}>
					{eventTime ? eventTime : 'Весь день'}
				</span>
			</div>
			<div className={styles.descrWrapper}>
				<span className={styles.title}>{title}</span>
			</div>
		</div>
	);
};
