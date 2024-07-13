import Link from 'next/link';
import styles from './PrayingButton.module.scss';

import { montserrat } from '@/constants/fonts';

interface IProps {
  text: string;
  path?: string,
}

const PrayingButton = ({ text, path }: IProps) => {
  return (
    <Link href={path ? path : "/contacts"} className={`${styles.button} ${montserrat.className}`}>
      {text}
    </Link>
  )
}

export { PrayingButton };