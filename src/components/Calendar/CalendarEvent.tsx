import styles from './Calendar.module.scss';

type CalendarEventProps = {
	time: string;
	title: string;
};

export const CalendarEvent = ({ time, title }: CalendarEventProps) => {
	return (
		<div className={styles.event}>
			<div className={styles.timeWrapper}>
				{time ? (
					<span className={styles.time}>{time.split('').slice(0, 5)}</span>
				) : (
					<div className=''></div>
				)}
			</div>
			<div className={styles.descrWrapper}>
				<span className={styles.title}>{title}</span>
			</div>
		</div>
	);
};
