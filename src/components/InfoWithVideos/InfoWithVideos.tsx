import { halvar } from '@/constants/fonts';
import styles from './InfoWithVideos.module.scss';

interface IProps {
  title: string;
  text: string;
  videos?: {
    big: any,
    small: []
  }
  id: string;
}

const InfoWithVideos = ({ title, text, videos, id }: IProps) => {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={`${styles.title} ${halvar.className}`}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
        </div>
        {
          videos &&
          <div className="">
            <div className="">big</div>
            <div className="">
              small
            </div>
            <div className="">
              small
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export { InfoWithVideos };