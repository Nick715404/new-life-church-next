import { usePopupContext } from './PopupProvider';
import styles from '../model/styles.module.scss';
import Image from 'next/image';

export const PopupCloseBtn = () => {
	const { setOpen } = usePopupContext();

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
