import styles from './ContactsForm.module.scss';
import { formThemesVariants } from "@/constants/form";

export const OptionsList = () => {
  return formThemesVariants.map(option => (
    <option className={styles.item} value={option.value} key={option.id}>
      {option.title}
    </option>
  ));
};