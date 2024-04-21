import styles from './DonationButton.module.scss';

import { muller } from "@/constants/fonts";
import { ComponentProps, ElementType } from 'react';

type TButtonOwnProps<E extends ElementType = ElementType> = {
  style: 'black' | 'white';
  text: string;
  as?: E,
}

type TButtonProps<E extends ElementType> = TButtonOwnProps<E> & Omit<ComponentProps<E>, keyof TButtonOwnProps>;

const defaultElement = 'button';

function DonationButton<E extends ElementType = typeof defaultElement>({
  style,
  text,
  as,
  ...otherProps
}: TButtonProps<E>) {
  const handleClassName = style === 'black' ? `${styles.donationButton} ${styles.black}` : `${styles.donationButton}`;
  const TagName = as || defaultElement;
  const font = muller.className;

  return (
    <div className={muller.className}>
      <TagName className={handleClassName} {...otherProps}>
        {text}
      </TagName>
    </div>
  )
};

export { DonationButton }