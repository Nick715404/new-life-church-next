import { InputHTMLAttributes } from 'react';
import {
	FieldErrors,
	UseFormRegister,
	Path,
	FieldValues,
} from 'react-hook-form';

import styles from '../model/styles.module.scss';

type FormRadioProps<T extends FieldValues> = {
	label: string;
	name: Path<T>;
	options: { label: string; value: string }[]; // Массив вариантов
	register: UseFormRegister<T>;
	errors?: FieldErrors<T>;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormRadio = <T extends FieldValues>(props: FormRadioProps<T>) => {
	const { label, name, options, register, errors, ...rest } = props;
	const errorMessage = errors?.[name]?.message as string | undefined;

	return (
		<fieldset className={styles.radioGroup}>
			<legend className={styles.legend}>{label}</legend>
			{options.map(option => (
				<label key={option.value} className={styles.radioLabel}>
					<input
						type='radio'
						value={option.value}
						{...register(name)}
						{...rest}
						className={styles.radioInput}
					/>
					{option.label}
				</label>
			))}
			{errorMessage && <span className={styles.error}>{errorMessage}</span>}
		</fieldset>
	);
};
