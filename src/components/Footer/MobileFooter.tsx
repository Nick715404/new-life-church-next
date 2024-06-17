import styles from './Footer.module.scss';
import { Logo } from '../Logo/Logo';
import { FooterAccordion } from '../FooterAccordion/FooterAccordion';

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
    </div>
  );
};