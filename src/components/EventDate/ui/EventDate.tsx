'use client';

import { usePathname } from 'next/navigation';

type TEventDateProps = {
	children: React.ReactNode;
};

export const EventDate = ({ children }: TEventDateProps) => {
	const pathname = usePathname();

	if (pathname !== '/events/business-conf') {
		return null;
	}

	return (
		<div>
			<span
				style={{
					display: 'block',
					marginBottom: '40px',
					textTransform: 'uppercase',
					border: '1px solid white',
					width: 'fit-content',
					padding: '10px 20px',
					borderRadius: '100px',
				}}
			>
				{children}
			</span>
		</div>
	);
};
