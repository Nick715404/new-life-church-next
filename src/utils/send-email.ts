export const sendEmail = async (
	email: string,
	name: string,
	eventType: 'youthural' | 'business'
) => {
	try {
		console.log('sending email');
		const response = await fetch('/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				name,
				eventType,
				message: `Спаси`,
			}),
		});

		const data = await response.json();
		if (!data.success) throw new Error(data.message);
		console.log(`Письмо отправлено на ${email}`);
	} catch (error) {
		console.error('Ошибка при отправке письма:', error);
	}
};
