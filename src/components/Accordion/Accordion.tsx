import styles from './Accordion.module.scss';
import { MotionBox } from '../MotionBox';
import { AccordionItem } from './AccordionItem';
import { IAccordion } from '@/interfaces/accordion';

type AccordionProps = { data: IAccordion[], };

const Accordion = ({ data }: AccordionProps) => {
  return (
    <div className={styles.accordion}>
      {
        data.map(item => (
          <MotionBox sideAnimation delay={+`0.${item.id}`} key={item.id}>
            <AccordionItem data={item} />
          </MotionBox>
        ))
      }
    </div>
  )
}

export { Accordion };