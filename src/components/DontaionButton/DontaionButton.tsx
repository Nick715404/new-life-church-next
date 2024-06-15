import styles from './DonationButton.module.scss';

import { muller } from "@/constants/fonts";
import { ComponentProps, ElementType } from 'react';

type TButtonOwnProps<E extends ElementType = ElementType> = {
  style: 'black' | 'white' | boolean;
  text: string;
  as?: E,
  accent?: boolean,
}

type TButtonProps<E extends ElementType> = TButtonOwnProps<E> & Omit<ComponentProps<E>, keyof TButtonOwnProps>;

const defaultElement = 'button';

function DonationButton<E extends ElementType = typeof defaultElement>({
  style,
  text,
  as,
  accent,
  ...otherProps
}: TButtonProps<E>) {
  const handleClassName = style === 'black' ? `${styles.donationButton} ${styles.black}` : `${styles.donationButton}`;
  const TagName = as || defaultElement;

  return (
    <div className={muller.className}>
      <TagName className={`${handleClassName} ${accent ? styles.accent : ''}`} {...otherProps}>
        {text}
      </TagName>
    </div>
  )
};

export { DonationButton }