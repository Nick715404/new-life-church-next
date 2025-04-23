import styles from '../model/styles.module.scss';

type TSchedulesItemProps = {
	time: string;
	event: string;
	speaker: string;
};

export const SchedulesItem = (props: TSchedulesItemProps) => {
	const { event, speaker, time } = props;

	return (
		<div className={styles.item}>
			<div className={styles.time}>{time}</div>
			<div className={styles.content}>
				<div className={styles.event}>{event}</div>
				<div className={styles.speaker}>{speaker}</div>
			</div>
		</div>
	);
};
