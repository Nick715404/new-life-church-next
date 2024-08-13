import { formThemesVariants } from '@/shared/constants';
import styles from './ContactsForm.module.scss';

export const OptionsList = () => {
	return formThemesVariants.map(option => (
		<option className={styles.item} value={option.value} key={option.id}>
			{option.title}
		</option>
	));
};
