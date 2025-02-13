'use client';

import { RootState } from '@/store/store';
import { TRegisterPerson } from '@/types/events';
import { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';

type RegisterProviderProps = {
	children?: React.ReactNode;
};

type TBusinessRegisterProviderContext = {
	formType: FormType;
	setFormType: (string: FormType) => void;
	persons: TRegisterPerson[];
};

const BusinessRegisterProviderContext =
	createContext<TBusinessRegisterProviderContext | null>(null);
type FormType = 'Подросток' | 'Предприниматель' | 'Пастор';

export const BusinessRegisterProvider = (props: RegisterProviderProps) => {
	const { children } = props;
	const [formType, setFormType] = useState<FormType>('Предприниматель');
	const persons = useSelector(
		(state: RootState) => state.event.registerPersons
	);

	return (
		<BusinessRegisterProviderContext.Provider
			value={{ formType, setFormType, persons }}
		>
			{children}
		</BusinessRegisterProviderContext.Provider>
	);
};

export const useBusinessRegisterContext = () => {
	const context = useContext(BusinessRegisterProviderContext);
	return { ...context };
};
