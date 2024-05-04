import { contactsAccordion } from '@/constants/accordion';
import styles from './Accordion.module.scss';
import { AccordionItem } from './AccordionItem';

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      {
        contactsAccordion.map(item => (
          <AccordionItem key={item.id} data={item} />
        ))
      }
    </div>
  )
}

export { Accordion };