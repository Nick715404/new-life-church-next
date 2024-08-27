'use client';

import { sendContactsFormData } from '@/api/forms';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

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

	const onSubmit: SubmitHandler<TContactsForm<string>> = async data => {
		console.log(data);
		setFormStatus(prev => (prev = 'sended'));
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
