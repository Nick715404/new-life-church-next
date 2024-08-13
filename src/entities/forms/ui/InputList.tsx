import styles from './Forms.module.scss';
import { formData } from '@/shared/constants/form';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import type { TFormInput, TStandartForm } from '@/shared/interfaces/forms';

type InputListProps<T extends {}> = {
	register: UseFormRegister<T>;
	errors: FieldErrors<Partial<T>>;
};

export const InputList = <T extends {}>({
	register,
	errors,
}: InputListProps<T>) => {
	return (
		<>
			{formData.map((item: TFormInput, index) => (
				<label key={index} className={styles.label}>
					<span className={styles.inputTitle}>
						{item.placeholder ? <span>{item.placeholder}</span> : null}
					</span>
					<input
						className={styles.input}
						{...register(item.id as Path<T>, {
							required: `*Поле ${item.placeholder} обязательно для заполнения`,
						})}
						placeholder={item.placeholder ? item.placeholder : ''}
						type={item.type}
					/>
					{errors[item.id as keyof T] && (
						<span className={styles.error}>{`${
							errors[item.id as keyof T]?.message
						}`}</span>
					)}
				</label>
			))}
		</>
	);
};
