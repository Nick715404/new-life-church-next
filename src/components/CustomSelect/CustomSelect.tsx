import styles from './CustomSelect.module.scss';
import { OptionsList } from '../ContactsForm/OptionsList';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { TContactsForm } from '../ContactsForm/useContactsForm';

type CustomSelectProps = Readonly<{
	register: UseFormRegister<TContactsForm<string>>;
}>;

export const CustomSelect: FC<CustomSelectProps> = ({ register }) => {
	return (
		<select
			{...register('theme')}
			defaultValue='default'
			className={`${styles.select} ${styles.formItem}`}
		>
			<option value='default' disabled>
				Выберите тему
			</option>
			<OptionsList />
		</select>
	);
};
