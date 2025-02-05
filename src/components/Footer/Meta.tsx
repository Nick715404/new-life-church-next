import styles from './Footer.module.scss';
import { Socials } from '../Socials/Socials';
import { halvar } from '@/constants/fonts';
import { DonationButton } from '../DontaionButton/DontaionButton';

const Meta = () => {
  return (
    <div className={styles.meta}>
      <span className={`${styles.metaTitle} ${halvar.className}`}>Мы в соц.сетях</span>
      <div className={styles.socials}>
        <Socials mode='white' size='small' />
      </div>
      <div>
        <DonationButton
          style='white'
          text='Пожертвовать'
          as='link'
          href="/donation"
          accent
        />
      </div>
    </div>
  )
}

export { Meta }