import { SelectHTMLAttributes } from 'react';
import {
	FieldErrors,
	UseFormRegister,
	Path,
	FieldValues,
} from 'react-hook-form';

import styles from '../model/styles.module.scss';

type FormSelectProps<T extends FieldValues> = {
	label: string;
	name: Path<T>;
	register: UseFormRegister<T>;
	errors?: FieldErrors<T>;
	options: { label: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect = <T extends FieldValues>(
	props: FormSelectProps<T>
) => {
	const { label, name, register, errors, options, ...rest } = props;
	const errorMessage = errors?.[name]?.message as string | undefined;

	return (
		<label htmlFor={name} className={styles.label}>
			<span className={styles.text}>{label}</span>
			<select
				id={name}
				{...register(name, {
					required: `Поле ${label} должно быть выбрано`,
				})}
				{...rest}
				className={styles.input}
			>
				<option value=''>Выберите вариант</option>
				{options.map(option => (
					<option key={option.label} value={option.label}>
						{option.label}
					</option>
				))}
			</select>
			{errorMessage && <span className={styles.error}>{errorMessage}</span>}
		</label>
	);
};
