import styles from './Footer.module.scss';
import { LinksColumns } from './LinksColumns';

import { Meta } from './Meta';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <Meta />
          <LinksColumns />
        </div>
      </div>
    </footer>
  )
}

export { Footer };