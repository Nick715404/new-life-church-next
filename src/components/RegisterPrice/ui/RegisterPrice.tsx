import { halvar } from '@/constants/fonts';

import styles from '../model/styles.module.scss';

type TRegisterPrice = {
	price: number;
	date?: Date;
	nextPrice?: number;
};

export const RegisterPrice = ({ date, price, nextPrice }: TRegisterPrice) => {
	const normalData = new Date(date || new Date()).toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
	});

	return (
		<div className={styles.wrapper}>
			<span className={`${halvar.className} ${styles.price}`}>{price} руб</span>
			{date && nextPrice && (
				<span>
					С {normalData} сумма добровольного пожертвования будет составлять -{' '}
					{nextPrice} руб
				</span>
			)}
		</div>
	);
};
