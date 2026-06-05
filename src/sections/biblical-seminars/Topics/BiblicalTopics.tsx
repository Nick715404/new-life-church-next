import { MotionBox } from '@/components/MotionBox';
import styles from './BiblicalTopics.module.scss';

const categories = [
  {
    num: '01',
    title: 'Основы веры и богословие',
    items: ['Вера', 'Праведность', 'Доктрины', 'Характер Бога', 'Завет в крови', 'Церковь', 'Власть Верующего', 'Израиль', 'История церкви'],
  },
  {
    num: '02',
    title: 'Библия и изучение Писания',
    items: ['Историческая достоверность писания', 'Толкование писания', 'Обзор книг Ветхого завета', 'Обзор книг Нового завета', 'Послание к Римлянам', 'Жизнь и служение Иисуса Христа'],
  },
  {
    num: '03',
    title: 'Духовная жизнь и формирование характера',
    items: ['Дух Святой и дары Духа Святого', 'Исцеление и освобождение', 'Ученичество', 'Характер верующего', 'Духовный рост и плод Духа', 'Молитва', 'Жизнь в поклонении'],
  },
  {
    num: '04',
    title: 'Церковь и христианская история',
    items: ['Видение и история нашей общины', 'История церкви', 'Израиль'],
  },
  {
    num: '05',
    title: 'Практическая христианская жизнь',
    items: ['Миссия', 'Семья', 'Евангелизация', 'Финансы'],
  },
];

const BiblicalTopics = () => {
  return (
    <section className={styles.section} id="topics">
      <MotionBox delay={0.1}>
        <div className={styles.secHead}>
          <span className={styles.label}>02 — Программа</span>
          <h2 className={styles.h2}>Основные темы</h2>
        </div>
      </MotionBox>
      <div className={styles.index}>
        {categories.map((cat, i) => (
          <MotionBox key={cat.num} delay={0.15 + i * 0.07}>
            <div className={styles.cat}>
              <span className={styles.catNum}>{cat.num}</span>
              <div>
                <h3 className={styles.catTitle}>{cat.title}</h3>
                <div className={styles.items}>
                  {cat.items.map((item, j) => (
                    <span key={j}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </MotionBox>
        ))}
      </div>
    </section>
  );
};

export { BiblicalTopics };
