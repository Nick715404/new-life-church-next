import { MotionBox } from '@/components/MotionBox';
import styles from './BiblicalSchedule.module.scss';

const BiblicalSchedule = () => {
  return (
    <section className={styles.section} id="format">
      <MotionBox delay={0.1}>
        <div className={styles.secHead}>
          <span className={styles.label}>03 — Организация</span>
          <h2 className={styles.h2}>Формат и расписание</h2>
        </div>
      </MotionBox>
      <MotionBox delay={0.2}>
        <div className={styles.table}>
          <div className={styles.row}>
            <span className={styles.day}>Вторник</span>
            <span className={styles.les}>Занятия</span>
            <span className={styles.time}>18:00 — 21:30</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Среда</span>
            <span className={styles.les}>Занятия</span>
            <span className={styles.time}>18:00 — 21:30</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Четверг</span>
            <span className={styles.les}>Занятия</span>
            <span className={styles.time}>18:00 — 21:30</span>
          </div>
        </div>
      </MotionBox>
      <MotionBox delay={0.35}>
        <div className={styles.facts}>
          <div className={styles.fact}>
            <div className={styles.factKey}>Формат обучения</div>
            <div className={styles.factVal}>Очный</div>
          </div>
          <div className={styles.fact}>
            <div className={styles.factKey}>Период</div>
            <div className={styles.factVal}>Сен 2026 — Май 2027</div>
          </div>
          <div className={styles.fact}>
            <div className={styles.factKey}>Рекомендуемое пожертвование</div>
            <div className={styles.factVal}>
              <b>4000₽</b> / мес
            </div>
          </div>
        </div>
      </MotionBox>
    </section>
  );
};

export { BiblicalSchedule };
