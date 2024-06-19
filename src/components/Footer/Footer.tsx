import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';
import { LinksColumns } from './LinksColumns';

import { Meta } from './Meta';
import { MobileFooter } from '../MobileFooter/MobileFooter';
import { PrivacyPolicy } from '../PrivacyPolicy/PrivacyPolicy';
import { MotionBox } from '../MotionBox';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <MotionBox delay={0.15} className={styles.logoWrapper}>
            <Logo />
          </MotionBox>
          <MotionBox className={styles.metaWrapper}>
            <LinksColumns />
            <Meta />
          </MotionBox>
        </div>
        <MotionBox delay={0.2} className={styles.policy}>
          <PrivacyPolicy />
        </MotionBox>
        <MobileFooter />
      </div>
    </footer>
  )
}

export { Footer };