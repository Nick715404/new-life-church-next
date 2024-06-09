import styles from './Speakers.module.scss';
import { SpeakerSwiper } from '@/components/SpeakerSwiper/SpeakerSwiper';
import { unbounded } from "@/constants/fonts";
import { ISpeaker } from '@/interfaces/speakers';

type EventSpeakersProps = { speakers: ISpeaker, };

export function EventSpeakers({ speakers }: EventSpeakersProps) {
  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className="relative">
          <h2 className={`${unbounded.className} ${styles.title}`}>
            Спикеры
          </h2>
          {
            speakers.data.length !== 0
              ?
              <SpeakerSwiper slides={speakers} />
              :
              <span className={styles.notFound}>
                Спикеры пока не известны. В скором времени они появятся!
              </span>
          }
        </div>
      </div>
    </section>
  );
};