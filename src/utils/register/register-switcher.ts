import { sendDataToBusiness, sendDataToYouthUral } from '@/api/register';
import type { TEventType } from '@/types/events';

export const registrySwitcher = async (
	data: any,
	invId: number,
	eventType: TEventType
) => {
	switch (eventType) {
		case 'business':
			await sendDataToBusiness({
				personId: `${invId}`,
				status: 'pending',
				...data,
			});
			break;
		case 'youthural':
			await sendDataToYouthUral({
				personId: `${invId}`,
				status: 'pending',
				...data,
			});
			break;
	}
};
