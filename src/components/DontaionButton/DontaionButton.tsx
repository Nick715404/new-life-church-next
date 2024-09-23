import styles from './DonationButton.module.scss';
import { ComponentProps, ElementType } from 'react';
import Link from 'next/link';

type TButtonOwnProps<E extends ElementType = ElementType> = {
	style: 'black' | 'white';
	text: string;
	as?: E;
	accent?: boolean;
	full?: boolean;
	href?: string;
};

type TButtonProps<E extends ElementType> = TButtonOwnProps<E> &
	Omit<ComponentProps<E>, keyof TButtonOwnProps>;

const defaultElement = 'button';

function DonationButton<E extends ElementType = typeof defaultElement>({
	style,
	text,
	as,
	accent,
	full,
	href,
	...otherProps
}: TButtonProps<E>) {
	const handleClassName = {
		style:
			style === 'black'
				? `${styles.donationButton} ${styles.black}`
				: `${styles.donationButton}`,
		accent: accent ? styles.accent : '',
		full: full ? styles.full : '',
	};
	const TagName = as || defaultElement;

	if (TagName === 'link') {
		return (
			<Link href={href || '#'}>
				<div
					className={`${handleClassName.style} ${handleClassName.accent} ${handleClassName.full}`}
					{...otherProps}
				>
					{text}
				</div>
			</Link>
		);
	}

	return (
		<TagName
			className={`${handleClassName.style} ${handleClassName.accent} ${handleClassName.full}`}
			{...otherProps}
		>
			{text}
		</TagName>
	);
}

export { DonationButton };
