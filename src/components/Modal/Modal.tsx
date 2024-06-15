import styles from './Modal.module.scss';

type ModalProps = {}

export function Modal({ }: ModalProps) {
  return (
    <div className={styles.modal}>
      Modal
    </div>
  );
};