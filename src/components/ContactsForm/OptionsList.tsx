import styles from './ContactsForm.module.scss';

import { formThemesVariants } from "@/constants/form";

const OptionsList = () => {
  return (
    <div className={styles.variants}>
      <ul className={styles.list}>
        {
          formThemesVariants.map(option => (
            <li className={styles.item} datatype={option.value} key={option.id}>
              {option.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export { OptionsList };