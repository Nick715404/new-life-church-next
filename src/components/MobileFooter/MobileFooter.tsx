import styles from './MobileFooter.module.scss';
import { Logo } from '../Logo/Logo';
import { FooterAccordion } from '../FooterAccordion/FooterAccordion';
import { DonationButton } from '../DontaionButton/DontaionButton';
import { Socials } from '../Socials/Socials';
import { PrivacyPolicy } from '../PrivacyPolicy/PrivacyPolicy';
import { MotionBox } from '../MotionBox';

type MobileFooterProps = {}

export function MobileFooter({ }: MobileFooterProps) {
  return (
    <div className={styles.mobileFooter}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.accordion}>
        <FooterAccordion />
      </div>
      <div className={styles.buttonBox}>
        <DonationButton
          style='white'
          text='Пожертвовать'
          as='link'
          href='/donation'
          accent
          full />
      </div>
      <div className={styles.socials}>
        <Socials mode='white' size='small' />
      </div>
      <MotionBox delay={0.2} className={styles.policy}>
        <PrivacyPolicy />
      </MotionBox>
    </div>
  );
};