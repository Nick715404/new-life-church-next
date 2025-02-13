import { InputHTMLAttributes } from 'react';
import {
	FieldErrors,
	UseFormRegister,
	Path,
	FieldValues,
} from 'react-hook-form';

import styles from '../model/styles.module.scss';

type FormInputProps<T extends FieldValues> = {
	label: string;
	name: Path<T>;
	register: UseFormRegister<T>;
	errors?: FieldErrors<T>;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
	const { label, name, register, errors, ...rest } = props;
	const errorMessage = errors?.[name]?.message as string | undefined;

	return (
		<label htmlFor={name} className={styles.label}>
			<span className={styles.text}>{label}</span>
			<input
				id={name}
				{...register(name, {
					required: `Поле ${label} должно быть заполнено`,
				})}
				{...rest}
				className={styles.input}
			/>
			{errorMessage && <span className={styles.error}>{errorMessage}</span>}
		</label>
	);
};
