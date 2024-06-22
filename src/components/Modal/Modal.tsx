import Image from 'next/image';
import styles from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode,
  setClose: () => void,
};

export const Modal = ({ children, setClose }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        {children}
        <button className={styles.close} onClick={setClose}>
          <Image width={40} height={40} src='/img/svg/close-btn.svg' alt='Закрыть модально окно' />
        </button>
      </div>
    </div>
  );
};