import Link from 'next/link';
import styles from './PrayingButton.module.scss';

import { montserrat } from '@/constants/fonts';

interface IProps {
  text: string;
}

const PrayingButton = ({ text }: IProps) => {
  return (
    <Link href="/contacts" className={`${styles.button} ${montserrat.className}`}>
      {text}
    </Link>
  )
}

export { PrayingButton };