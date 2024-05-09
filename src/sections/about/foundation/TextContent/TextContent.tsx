import { FOUNDATION_DATA } from '@/constants/utils';
import styles from './TextContent.module.scss';
import { TextRow } from '@/components/TextRow/TextRow';

const TextContent = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          {
            FOUNDATION_DATA.map((row) => (
              <TextRow data={row} key={row.id} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export { TextContent }