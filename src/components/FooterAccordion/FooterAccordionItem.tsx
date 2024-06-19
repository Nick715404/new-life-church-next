'use client';

import styles from './FooterAccordion.module.scss';
import Image from 'next/image';
import { LinkList } from './LinkList';
import { halvar } from '@/constants/fonts';
import { INavLink } from '@/interfaces/links';
import { footerContactsInfo } from '@/constants/links';
import { useState } from 'react';

type FooterAccordionItemProps = {
  title: string,
  links: INavLink[] | typeof footerContactsInfo,
  icons?: boolean,
}

export function FooterAccordionItem({ links, icons, title }: FooterAccordionItemProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={styles.item} onClick={() => setActive(!active)}>
      <div className={styles.title}>
        <span className={halvar.className}>{title}</span>
        <Image
          className={active ? `${styles.icon} ${styles.flipped}` : styles.icon}
          width={18}
          height={24}
          src='/img/svg/footer-accordion.svg'
          alt='Стрелочка аккордиона' />
      </div>
      {
        active &&
        <div className={styles.body}>
          <LinkList links={links} />
        </div>
      }
    </div>
  );
};