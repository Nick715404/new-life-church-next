'use client';

import { sendContactsFormData } from '@/api/forms';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { submitForm } from './ContactsForm.api';

export type TContactsForm<T> = {
	name: T;
	email: T;
	phone: T;
	description: T;
	agreement: boolean;
	theme: T;
};

export const useContactsForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<TContactsForm<string>>();
	const [formStatus, setFormStatus] = useState<'sended' | 'not_sended'>(
		'not_sended'
	);

	const phoneFormating = (number: string) => {
		const newPhone = number.replace(/\D/g, '');
		return newPhone;
	};

	const onSubmit: SubmitHandler<TContactsForm<string>> = async data => {
		const formatedPhone = phoneFormating(data.phone);
		const response = await submitForm({ ...data, phone: formatedPhone });
		if (response.status === 'success') {
			setFormStatus('sended');
		} else {
			setFormStatus('not_sended');
		}
		reset();
	};

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		formStatus,
	};
};
