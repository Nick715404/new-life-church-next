export const fetchPaymentUrl = async (clientData: any) => {
	try {
		const response = await fetch(`/payment/pay`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...clientData }),
		});
		if (!response.ok) {
			throw new Error('Failed to fetch payment URL');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching payment URL:', error);
	}
};
