import styles from './VideoBackground.module.scss';

interface IProps<E> {
  src: string;
  isMuted?: E;
  isAutoPlay?: E;
  isLoop?: E;
}

const VideoBackground = ({ src, isMuted, isAutoPlay, isLoop }: IProps<boolean>) => {
  return (
    <div className={styles.videoBackground}>
      <video
        className={styles.player}
        src={src}
        muted={isMuted}
        autoPlay={isAutoPlay}
        loop={isLoop}
        playsInline
      />
    </div>
  )
}

export { VideoBackground };