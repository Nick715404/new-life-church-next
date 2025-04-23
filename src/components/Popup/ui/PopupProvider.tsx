'use client';

import { createContext, useContext, useState } from 'react';

type TPopupContext = {
	isOpen: boolean;
	setOpen: (status: boolean) => void;
};

type PopupProviderProps = {
	children?: React.ReactNode;
};

const PopupContext = createContext<TPopupContext | null>(null);

export const PopupProvider = ({ children }: PopupProviderProps) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<PopupContext.Provider value={{ isOpen, setOpen }}>
			{children}
		</PopupContext.Provider>
	);
};

export const usePopupContext = () => {
	const context = useContext(PopupContext);
	return { ...context };
};
