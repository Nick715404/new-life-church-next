import styles from './Accordion.module.scss';
import { AccordionItem } from './AccordionItem';
import { IAccordion } from '@/interfaces/accordion';

type AccordionProps = { data: IAccordion[], };

const Accordion = ({ data }: AccordionProps) => {
  return (
    <div className={styles.accordion}>
      {
        data.map(item => (
          <AccordionItem key={item.id} data={item} />
        ))
      }
    </div>
  )
}

export { Accordion };