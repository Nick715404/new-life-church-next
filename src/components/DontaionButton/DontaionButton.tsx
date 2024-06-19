import styles from './DonationButton.module.scss';

import { muller } from "@/constants/fonts";
import classNames from 'classnames';
import { ComponentProps, ElementType } from 'react';

type TButtonOwnProps<E extends ElementType = ElementType> = {
  style: 'black' | 'white' | boolean;
  text: string;
  as?: E,
  accent?: boolean,
  full?: boolean,
}

type TButtonProps<E extends ElementType> = TButtonOwnProps<E> & Omit<ComponentProps<E>, keyof TButtonOwnProps>;

const defaultElement = 'button';

function DonationButton<E extends ElementType = typeof defaultElement>({
  style,
  text,
  as,
  accent,
  full,
  ...otherProps
}: TButtonProps<E>) {
  const handleClassName = {
    style: style === 'black' ? `${styles.donationButton} ${styles.black}` : `${styles.donationButton}`,
    accent: accent ? styles.accent : '',
    full: full ? styles.full : '',
  };
  const TagName = as || defaultElement;

  return (
    <div className={muller.className}>
      <TagName className={`${handleClassName.style} ${handleClassName.accent} ${handleClassName.full}`} {...otherProps}>
        {text}
      </TagName>
    </div>
  )
};

export { DonationButton }