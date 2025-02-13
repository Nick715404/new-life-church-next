import React from 'react';
import { PopupProvider } from './PopupProvider';

type TPopupProps = {
	children?: React.ReactNode;
};

export const Popup = ({ children }: TPopupProps) => {
	return <PopupProvider>{children}</PopupProvider>;
};
