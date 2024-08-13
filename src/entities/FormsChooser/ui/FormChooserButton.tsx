'use client';

import styles from './../../forms/ui/Forms.module.scss';
import { FormChooser } from './FormChooser';
import { IEventType } from '@/shared/interfaces/events';
import { useState } from 'react';
import { useStopScrolling } from '@/shared/hooks/useStopScrolling';
import { useDispatch } from 'react-redux';
import { addPrice, addRole } from '@/app/_store/eventSlice';
import { Modal } from '@/components/Modal/Modal';

type FormChooseButtonProps = {
	type: IEventType;
	slug?: string;
	price: number;
	role: string;
};

export const FormChooserButton = ({
	type,
	slug,
	price,
	role,
}: FormChooseButtonProps) => {
	const [active, setActive] = useState<boolean>(false);
	const { remove, set } = useStopScrolling();
	const dispatch = useDispatch();

	const handleOpen = () => {
		setActive(true);
		set();
		dispatch(addPrice(price));
		dispatch(addRole(role));
	};

	const handleClose = () => {
		setActive(false);
		remove();
		dispatch(addPrice(0));
		dispatch(addRole('default'));
	};

	return (
		<>
			<button onClick={handleOpen} className={styles.btn}>
				Зарегистрироваться
			</button>
			{active && (
				<Modal setClose={handleClose}>
					<FormChooser type={type} slug={slug} />
				</Modal>
			)}
		</>
	);
};
