'use client';

import { usePopupContext } from './PopupProvider';
import styles from '../model/styles.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';

export const PopupCloseBtn = () => {
	const { setOpen } = usePopupContext();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setOpen!(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [setOpen]);

	return (
		<button
			title='Закрыть модальное окно'
			aria-label='Закрыть модальное окно'
			className={styles.closeBtn}
			onClick={() => setOpen!(false)}
		>
			<Image
				src='/img/svg/close-btn.svg'
				alt='Закрыть модальное окно'
				width={40}
				height={40}
			/>
		</button>
	);
};
