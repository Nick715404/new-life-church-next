import styles from './Speakers.module.scss';
import { SpeakerSwiper } from '@/components/SpeakerSwiper/SpeakerSwiper';
import { halvar } from "@/constants/fonts";
import { ISpeaker } from '@/interfaces/speakers';

type EventSpeakersProps = { speakers: ISpeaker, };

export function EventSpeakers({ speakers }: EventSpeakersProps) {
  if (speakers.data.length === 0) {
    return null;
  };

  return (
    <section className={styles.section}>
      <div className="container-small">
        <div className="relative">
          <h2 className={`${halvar.className} ${styles.title}`}>
            Спикеры
          </h2>
          <SpeakerSwiper slides={speakers} />
        </div>
      </div>
    </section>
  );
};