'use client';

import { RootState } from '@/store/store';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FormFields } from './useFaithConf';
import { fetchPaymentUrl } from '@/utils/register/payment';

export const useLeadersAndPastors = () => {
	const persons = useSelector(
		(state: RootState) => state.event.registerPersons
	);
	const router = useRouter();

	const currentPerson = persons[0];
	const price = currentPerson?.attributes.init_price;

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormFields>({
		mode: 'onBlur',
	});

	const onSubmit = async (data: FormFields) => {
		const clientData = {
			...data,
			eventType: 'faithconf',
			registerType: 'Семинары для пасторов и лидеров',
			price: 1500,
		};
		console.log(clientData);
		const paymentData = await fetchPaymentUrl(clientData);
		router.push(paymentData.paymentUrl);
	};

	return { register, handleSubmit, errors, isValid, onSubmit, currentPerson };
};
