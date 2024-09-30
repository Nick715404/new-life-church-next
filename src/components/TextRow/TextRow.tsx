import styles from './TextRow.module.scss';
import { halvar } from '@/constants/fonts';
import { IFoudationData } from '@/types/utils';

interface IProps {
	data: IFoudationData;
}

const TextRow = ({ data }: IProps) => {
	return (
		<div className={styles.textRow}>
			<div className={styles.wrapper}>
				<span className={`${styles.id} ${halvar.className}`}>
					{`0${data.id}`}
				</span>
				<span className={`${styles.title} ${halvar.className}`}>
					{data.title}
				</span>
			</div>
			<p className={styles.text}>{data.text}</p>
		</div>
	);
};

export { TextRow };
