import styles from './FooterAccordion.module.scss';
import { footerAccordionData } from '@/constants/links';
import { FooterAccordionItem } from './FooterAccordionItem';

export function FooterAccordion() {
  return (
    <div className={styles.footerAccordion}>
      {
        footerAccordionData.map((item, index) => (
          <FooterAccordionItem
            key={index}
            links={item.items}
            title={item.title} />
        ))
      }
    </div>
  );
};

