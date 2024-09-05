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
	const [formStatus, setFormStatus] = useState<'sended' | 'waiting' | 'not_sended'>(
		'waiting'
	);
	const [isLoading, setIsLoading] = useState<'loading' | 'loaded' | 'waiting'>(
		'waiting'
	);

	const phoneFormating = (number: string) => {
		const newPhone = number.replace(/\D/g, '');
		return newPhone;
	};

	const onSubmit: SubmitHandler<TContactsForm<string>> = async data => {
		setIsLoading('loading');
		const formatedPhone = phoneFormating(data.phone);
		const response = await submitForm({ ...data, phone: formatedPhone });
		setIsLoading('loaded');
		if (response.status === 'success') {
			setFormStatus('sended');
		} else {
			setFormStatus('not_sended');
		}
		reset();
		setIsLoading('waiting');

		setTimeout(() => {
			setFormStatus('waiting')
		}, 2500)

	};

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		formStatus,
		isLoading,
	};
};
