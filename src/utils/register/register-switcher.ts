import {
	sendDataToBusiness,
	sendDataToChelFire,
	sendDataToFaithConf,
	sendDataToYouthMgn,
	sendDataToYouthUral,
} from '@/api/register';
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
		case 'faithconf':
			await sendDataToFaithConf({
				personId: `${invId}`,
				status: 'pending',
				...data,
			});
			break;
		case 'chelfire':
			await sendDataToChelFire({
				personId: `${invId}`,
				status: 'pending',
				...data,
			});
		case 'youthuralmgn':
			await sendDataToYouthMgn({
				personId: `${invId}`,
				status: 'pending',
				...data,
			});
	}
};
