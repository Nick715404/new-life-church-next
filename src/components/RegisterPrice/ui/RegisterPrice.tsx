'use client';

import { halvar } from '@/constants/fonts';
import { useBusinessRegisterContext } from '@/providers/BusinessRegisterProvider/ui';

import styles from '../model/styles.module.scss';

type TRegisterPrice = {
	price: number;
	date: Date;
	nextPrice: number;
};

export const RegisterPrice = ({ date, price, nextPrice }: TRegisterPrice) => {
	const { formType } = useBusinessRegisterContext();
	const normalData = new Date(date).toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
	});

	return (
		<div className={styles.wrapper}>
			<span className={`${halvar.className} ${styles.price}`}>{price} руб</span>
			<span>
				С {normalData} цена будет составлять - {nextPrice} руб
			</span>
		</div>
	);
};
