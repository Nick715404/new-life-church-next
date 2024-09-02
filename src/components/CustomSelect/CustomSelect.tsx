import styles from './CustomSelect.module.scss';
import { OptionsList } from '../ContactsForm/OptionsList';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { TContactsForm } from '../ContactsForm/useContactsForm';

type CustomSelectProps = Readonly<{
	register: UseFormRegister<TContactsForm<string>>;
	isDisabled?: boolean;
}>;

export const CustomSelect: FC<CustomSelectProps> = ({
	register,
	isDisabled,
}) => {
	return (
		<select
			{...register('theme')}
			defaultValue='default'
			disabled={isDisabled}
			className={`${styles.select} ${styles.formItem}`}
		>
			<option value='default' disabled>
				Выберите тему
			</option>
			<OptionsList />
		</select>
	);
};
