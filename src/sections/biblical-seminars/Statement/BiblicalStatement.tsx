import { MotionBox } from '@/components/MotionBox';
import styles from './BiblicalStatement.module.scss';

const BiblicalStatement = () => {
  return (
    <section className={styles.section}>
      <MotionBox delay={0.1}>
        <p className={styles.text}>
          Ты христианин — но хочешь <strong>глубже</strong> понимать, во что именно веришь? Хочешь найти своё окружение, служение и людей, с которыми можно <strong>расти вместе</strong> и построить дружбу на года?
        </p>
      </MotionBox>
    </section>
  );
};

export { BiblicalStatement };
