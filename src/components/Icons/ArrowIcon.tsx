type TArrowIconProps = {
	isReversed?: boolean;
};

export const ArrowIcon = ({ isReversed }: TArrowIconProps) => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			style={{
				transform: isReversed ? 'rotate(180deg)' : '',
			}}
		>
			<path
				d='M31.2843 16.142L3.00001 16.142M3.00001 16.142L17.1421 1.99991M3.00001 16.142L17.1422 30.2842'
				stroke='#fff'
				strokeWidth='3'
			/>
		</svg>
	);
};
