'use client';

import { usePopupContext } from './PopupProvider';

type TPopupTriggerProps = {
	children?: string;
	className?: string;
};

export const PopupTrigger = ({ children, className }: TPopupTriggerProps) => {
	const { isOpen, setOpen } = usePopupContext();
	const handleClick = () => {
		setOpen!(true);
	};
	return (
		<button className={`${className}`} onClick={handleClick}>
			{children}
		</button>
	);
};
