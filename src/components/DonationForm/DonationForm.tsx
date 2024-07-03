import styles from './DonationForm.module.scss';
import Image from 'next/image';
import { halvar } from '@/constants/fonts';
import { DonationDesktopForm } from './DonationDesktopForm';

export function DonationForm() {
  return (
    <div className={styles.form}>
      <h2 className={`${styles.title} ${halvar.className}`}>Пожертвование</h2>
      <DonationDesktopForm />
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          width={300}
          height={300}
          priority
          src="/img/png/donation-qr.jpg"
          alt="Добровольное пожертвование" />
      </div>
    </div>
  );
};