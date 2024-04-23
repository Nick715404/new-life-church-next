import styles from './Footer.module.scss';

import { Logo } from '../Logo/Logo';
import { Socials } from '../Socials/Socials';

import { unbounded } from '@/constants/fonts';
import { CONTACT_INFO } from '@/seo/constants';

import Link from 'next/link';

const Meta = () => {
  return (
    <div className={styles.meta}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.info}>
        <Link className={`${styles.infoText} ${unbounded.className}`} href={`mailto: ${CONTACT_INFO.EMAIL}`}>
          {CONTACT_INFO.EMAIL}
        </Link>
        <Link className={`${styles.infoText} ${unbounded.className}`} href={`tel: ${CONTACT_INFO.PHONE}`}>
          {CONTACT_INFO.PHONE}
        </Link>
      </div>
      <div className={styles.socials}>
        <Socials mode='white' size='small' />
      </div>
    </div>
  )
}

export { Meta }