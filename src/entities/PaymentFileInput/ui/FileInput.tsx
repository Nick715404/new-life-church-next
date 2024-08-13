'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import {
	FieldErrors,
	Path,
	PathValue,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form';
import styles from './styles.module.scss';

type TFileInput<T extends Record<string, any>> = {
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
};

export const FileInput = <T extends Record<string, any>>({
	errors,
	register,
}: TFileInput<T>) => {
	const name: Path<T> = 'paymentFile' as Path<T>;
	const [file, setFileUrl] = useState<string | null>(null);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file: File | null = event.target.files![0];
		if (file.size > 0) {
			const fileUrl = URL.createObjectURL(file);
			setFileUrl(fileUrl);
		}
	};

	useEffect(() => {
		console.log(file);
	}, [file]);

	return (
		<>
			<input
				{...register(name, {
					required: 'Прикрепите файл',
				})}
				onChange={handleChange}
				type='file'
				name='paymentFile'
				accept='image/png, image/jpeg, image/webp'
				className={styles.fileInput}
			/>
			{errors[name]?.message && (
				<p className={styles.error}>{`${errors[name]?.message}`}</p>
			)}
		</>
	);
};
