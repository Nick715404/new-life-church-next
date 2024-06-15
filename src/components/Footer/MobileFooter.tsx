import styles from './Footer.module.scss';
import { Logo } from '../Logo/Logo';

type MobileFooterProps = {}

export function MobileFooter({ }: MobileFooterProps) {
  return (
    <div className={styles.mobileFooter}>
      <Logo />
    </div>
  );
};