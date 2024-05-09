import { ILinkInBlock, ILinksBlocks } from '@/interfaces/utils';
import styles from './LinksBlocks.module.scss';
import Link from 'next/link';
import { unbounded } from '@/constants/fonts';

interface IProps {
  data: ILinksBlocks<ILinkInBlock>
}

const LinksBlocks = ({ data }: IProps) => {
  return (
    <div className={styles.linksBlocks}>
      <div className={styles.big}>
        <h2 className={`${styles.bigTitle} ${unbounded.className}`}>{data.big.label}</h2>
      </div>
      <div className={styles.smallBox}>
        <div datatype='top-left' className={styles.small}>
          <span className={`${unbounded.className} ${styles.smallTitle}`}>
            {data.topLeft.label}
          </span>
          <Link className={styles.smallLink} href={data.topLeft.href} />
        </div>
        <div datatype='top-right' className={styles.small}>
          <span className={`${unbounded.className} ${styles.smallTitle}`}>
            {data.topRight.label}
          </span>
          <Link className={styles.smallLink} href={data.topRight.href} />
        </div>
        <div datatype='bottom-left' className={styles.small}>
          <span className={`${unbounded.className} ${styles.smallTitle}`}>
            {data.bottomLeft.label}
          </span>
          <Link className={styles.smallLink} href={data.bottomLeft.href} />
        </div>
        <div datatype='bottom-right' className={styles.small}>
          <span className={`${unbounded.className} ${styles.smallTitle}`}>
            {data.bottomRight.label}
          </span>
          <Link className={styles.smallLink} href={data.bottomRight.href} />
        </div>
      </div>
    </div>
  )
}

export { LinksBlocks };