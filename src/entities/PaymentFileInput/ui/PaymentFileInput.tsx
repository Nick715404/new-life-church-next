import styles from './styles.module.scss';
import Link from 'next/link';
import { FileInput } from './FileInput';

type TPaymentFileInput = { href: string };

export const PaymentFileInput = ({ href }: TPaymentFileInput) => {
	return (
		<label className={styles.label}>
			<span className={styles.description}>
				Для завершения регистрации внесите пожертвование, после успешной
				операции сделайте скрин квитанции и прикрепите файл
			</span>
			<span className={styles.textWithLink}>
				Нажмите на
				<Link className={styles.link} href={href}>
					Добровольное пожертвование
				</Link>
			</span>
			<span className={styles.text}>Прикрепите чек об успешной оплате</span>
		</label>
	);
};
