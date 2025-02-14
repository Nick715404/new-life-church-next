import { InputHTMLAttributes } from 'react';
import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from 'react-hook-form';

import styles from '../model/styles.module.scss';

type TFormCheckboxProps<T extends FieldValues> = {
	name: Path<T>;
	register: UseFormRegister<T>;
	errors?: FieldErrors<T>;
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormCheckbox = <T extends FieldValues>(
	props: TFormCheckboxProps<T>
) => {
	const { name, register, label, errors, ...otherProps } = props;

	return (
		<label htmlFor={name} className={styles.checkboxLabel}>
			<span>{label}</span>
			<input
				id={name}
				type='checkbox'
				{...register(name)}
				{...otherProps}
				className={styles.checkbox}
			/>
		</label>
	);
};
