import styles from './PrayingButton.module.scss';

import { muller } from '@/constants/fonts';

interface IProps {
  text: string;
}

const PrayingButton = ({ text }: IProps) => {
  return (
    <button className={`${styles.button} ${muller.className}`}>
      {text}
    </button>
  )
}

export { PrayingButton };