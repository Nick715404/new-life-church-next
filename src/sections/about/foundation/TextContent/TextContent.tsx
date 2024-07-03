import { FOUNDATION_DATA } from '@/constants/utils';
import styles from './TextContent.module.scss';
import { TextRow } from '@/components/TextRow/TextRow';
import { MotionBox } from '@/components/MotionBox';

const TextContent = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          {
            FOUNDATION_DATA.map((row) => (
              <MotionBox delay={+`0.${row.id}`} key={row.id}>
                <TextRow data={row} />
              </MotionBox>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export { TextContent }