import { usePopupContext } from './PopupProvider';
import styles from '../model/styles.module.scss';
import { PopupCloseBtn } from './PopupCloseBtn';

type PopupContentProps = {
	children?: React.ReactNode;
};

export const PopupContent = ({ children }: PopupContentProps) => {
	const { isOpen } = usePopupContext();

	if (!isOpen) return null;

	return (
		<div className={styles.popupLayout}>
			<PopupCloseBtn />
			<div className={styles.wrapper}>{children}</div>
		</div>
	);
};
