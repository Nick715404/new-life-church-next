import { unbounded } from '@/constants/fonts';
import styles from './Pastors.module.scss';
import { PastorsList } from './PastorsList';

const Pastors = () => {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={`${styles.title} ${unbounded.className}`}>Пасторская<br />команда</h2>
            <p className={styles.text}>Nibh sed pulvinar proin gravida hendrerit lectus a. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Cursus metus aliquam.</p>
          </div>
          <PastorsList />
        </div>
      </div>
    </section>
  )
}

export { Pastors };