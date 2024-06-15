import { Accordion } from '@/components/Accordion/Accordion';
import styles from './Questions.module.scss';
import { contactsAccordion } from '@/constants/accordion';

import { unbounded } from '@/constants/fonts';

const Questions = () => {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <div className={styles.titleBox}>
            <h2 className={`${styles.title} ${unbounded.className}`}>
              Есть<br /> вопросы?
            </h2>
          </div>
          <div className={styles.accordionBox}>
            <Accordion data={contactsAccordion} />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Questions };