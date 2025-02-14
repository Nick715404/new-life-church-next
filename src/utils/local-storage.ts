import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { eventSwitcher } from './register/session';
import { sendEmail } from './send-email';

export const storeManipulate = async (
	storedData: string,
	setStatus: (el: 'pending' | 'loading' | 'loaded') => void,
	router: AppRouterInstance
) => {
	try {
		setStatus('loading');
		const data = JSON.parse(storedData);
		const res = await eventSwitcher(data);

		if (res?.status === 'done') {
			sessionStorage.setItem('formProcessed', 'true');
			console.log(data);

			if (data.email && data.first_name && data.eventType) {
				await sendEmail(data.email, data.first_name, data.eventType);
			}
			localStorage.removeItem('formData');
			setStatus('loaded');
			setTimeout(() => {
				router.push('/');
			}, 6000);
		} else {
			router.push('/payment-error');
		}
	} catch (error) {
		console.error('Ошибка обработки данных:', error);
		router.push('/payment-error');
	}
};
