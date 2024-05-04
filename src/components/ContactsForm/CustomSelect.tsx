'use client';

import { useState } from 'react';
import styles from './ContactsForm.module.scss';
import { OptionsList } from './OptionsList';
import Image from 'next/image';

type Props = {}

const CustomSelect = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const classNameHandler = active ? `${styles.icon} ${styles.active}` : `${styles.icon}`;
  const selectHandler = () => setActive(!active);

  return (
    <>
      <div
        onClick={selectHandler}
        className={`${styles.select} ${styles.formItem}`}
      >
        <span className={styles.selectTitle}>Выберите тему обращения</span>
        <div className={classNameHandler}>
          <Image
            className={styles.iconImg}
            width={16}
            height={16}
            src={'/img/svg/black-arrow.svg'}
            alt='Выберите тему обращения'
            style={{ filter: 'invert(100%)' }}
          />
        </div>
      </div>
      <div className={styles.optionsBox}>
        {active && <OptionsList />}
      </div>
    </>
  )
}

export default CustomSelect