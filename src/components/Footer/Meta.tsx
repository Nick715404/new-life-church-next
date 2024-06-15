import styles from './Footer.module.scss';

import { Logo } from '../Logo/Logo';
import { Socials } from '../Socials/Socials';

import { halvar, unbounded } from '@/constants/fonts';
import { CONTACT_INFO } from '@/seo/constants';

import Link from 'next/link';
import { DonationButton } from '../DontaionButton/DontaionButton';

const Meta = () => {
  return (
    <div className={styles.meta}>
      <span className={`${styles.metaTitle} ${halvar.className}`}>Мы в соц.сетях</span>
      <div className={styles.socials}>
        <Socials mode='white' size='small' />
      </div>
      <div className="">
        <DonationButton
          style='white'
          text='Пожертвовать'
          as='button'
          type='button'
          accent
        />
      </div>
    </div>
  )
}

export { Meta }