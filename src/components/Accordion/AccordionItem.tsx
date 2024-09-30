'use client';

import { halvar } from '@/constants/fonts';
import styles from './Accordion.module.scss';
import { IAccordion } from '@/types/accordion';
import { useState } from 'react';

type TProps = {
	data: IAccordion;
};

const AccordionItem = ({ data }: TProps) => {
	const [active, setActive] = useState(false);

	return (
		<div
			onClick={() => setActive(!active)}
			className={
				active
					? `${styles.accordionItem} ${styles.active}`
					: `${styles.accordionItem}`
			}
			aria-description='Вопрос аккордиона'
		>
			<div className={styles.accordionHeading}>
				<div className={`${styles.accordionTitle} ${halvar.className}`}>
					{data.title}
				</div>
				<div className={styles.icon}>
					<span className={styles.iconLine}></span>
					<span className={styles.iconLine}></span>
				</div>
			</div>
			{active && (
				<div className={styles.accordionDescription}>
					<p className={styles.text}>{data.description}</p>
				</div>
			)}
		</div>
	);
};

export { AccordionItem };
