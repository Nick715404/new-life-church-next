'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { TChelFirePersonType, TRegisterPerson } from '@/types/events';
import { createContext, useContext, useState } from 'react';

type RegisterProviderProps = {
	children?: React.ReactNode;
};

type TChelFireContext = {
	formType: FormType;
	setFormType: (string: FormType) => void;
	persons: TRegisterPerson[];
};

const ChelFireContext = createContext<TChelFireContext | null>(null);
type FormType = TChelFirePersonType;

export const ChelFireProvider = (props: RegisterProviderProps) => {
	const { children } = props;
	const [formType, setFormType] = useState<FormType>('Подросток');
	const persons = useSelector(
		(state: RootState) => state.event.registerPersons
	);

	return (
		<ChelFireContext.Provider value={{ formType, setFormType, persons }}>
			{children}
		</ChelFireContext.Provider>
	);
};

export const useChelFireContext = () => {
	const context = useContext(ChelFireContext);
	return { ...context };
};
