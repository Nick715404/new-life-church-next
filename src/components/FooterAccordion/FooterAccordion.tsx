import { footerAccordionData } from '@/shared/constants';
import styles from './FooterAccordion.module.scss';
import { FooterAccordionItem } from './FooterAccordionItem';

export function FooterAccordion() {
	return (
		<div className={styles.footerAccordion}>
			{footerAccordionData.map((item, index) => (
				<FooterAccordionItem
					key={index}
					links={item.items}
					title={item.title}
				/>
			))}
		</div>
	);
}
