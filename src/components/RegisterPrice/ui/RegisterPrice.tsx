'use client';

import { halvar } from '@/constants/fonts';
import { useBusinessRegisterContext } from '@/providers/BusinessRegisterProvider/ui';

import styles from '../model/styles.module.scss';

type TRegisterPrice = {
	price: number;
	date: Date;
};

export const RegisterPrice = ({ date, price }: TRegisterPrice) => {
	const { formType } = useBusinessRegisterContext();

	return (
		<div className={styles.wrapper}>
			<span className={`${halvar.className} ${styles.price}`}>{price} руб</span>
			<p>{`${date}`}</p>
		</div>
	);
};
