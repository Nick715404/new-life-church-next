'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type TPayButtonProps = {
	className?: string;
	price: number;
};

const PayButton = ({ className, price }: TPayButtonProps) => {
	const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		const fetchPaymentUrl = async () => {
			try {
				const response = await fetch(`/payment/pay`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ price }),
				});
				if (!response.ok) {
					throw new Error('Failed to fetch payment URL');
				}

				const data = await response.json();
				setPaymentUrl(data.paymentUrl);
			} catch (error) {
				console.error('Error fetching payment URL:', error);
			}
		};

		fetchPaymentUrl();
	}, []);

	const handleClick = () => {
		router.push(paymentUrl!);
	};

	if (!paymentUrl) {
		return <div>Загрузка ссылки для оплаты...</div>;
	}

	return (
		<button
			className={className}
			// onClick={handleClick}
			rel='noopener noreferrer'
			type='submit'
		>
			Зарегистрироваться
		</button>
	);
};

export default PayButton;
