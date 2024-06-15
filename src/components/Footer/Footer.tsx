import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';
import { LinksColumns } from './LinksColumns';

import { Meta } from './Meta';
import { MobileFooter } from './MobileFooter';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
          <div className={styles.metaWrapper}>
            <LinksColumns />
            <Meta />
          </div>
        </div>
        <MobileFooter />
      </div>
    </footer>
  )
}

export { Footer };