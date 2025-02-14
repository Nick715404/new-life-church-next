'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type TPayButtonProps = {
	className?: string;
	price: number;
	isValid: boolean;
};

const PayButton = ({ className, price, isValid }: TPayButtonProps) => {
	const [disabled, setDisabled] = useState<boolean>(false);
	const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		if (!isValid) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [isValid]);

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
	}, [price]);

	const handleClick = () => {
		router.push(paymentUrl!);
	};

	if (!paymentUrl) {
		return <div>Загрузка ссылки для оплаты...</div>;
	}

	return (
		<button
			className={className}
			onClick={handleClick}
			rel='noopener noreferrer'
			type='submit'
			disabled={disabled}
		>
			Зарегистрироваться
		</button>
	);
};

export default PayButton;
