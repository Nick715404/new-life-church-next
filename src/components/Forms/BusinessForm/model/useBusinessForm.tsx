import { useBusinessRegisterContext } from '@/providers/BusinessRegisterProvider/ui';
import { RootState } from '@/store/store';
import { fetchPaymentUrl } from '@/utils/register/payment';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

export type FormFields = {
	first_name: string;
	last_name: string;
	sur_name: string;
	city: string;
	church: string;
	vector?: string;
	occupation?: string;
	source?: string;
	email: string;
	phone: string;
};

export const useBusinessForm = () => {
	const { formType } = useBusinessRegisterContext();
	const router = useRouter();
	const persons = useSelector(
		(state: RootState) => state.event.registerPersons
	);

	const currentPerson = persons.find(
		person => person.attributes.person_type === formType
	);

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
			eventType: 'business',
			personType: currentPerson?.attributes.person_type,
			price: price,
		};

		const paymentData = await fetchPaymentUrl(clientData);
		router.push(paymentData.paymentUrl);
	};
	return {
		onSubmit,
		register,
		handleSubmit,
		errors,
		isValid,
		formType,
		currentPerson,
	};
};
