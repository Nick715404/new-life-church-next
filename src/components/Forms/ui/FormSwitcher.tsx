'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { BusinessForm } from '../BusinessForm/ui';
import { YouthUralForm } from '../YouthUral/ui';
import { TeensUralForm } from '../TeensUral/ui';
import { BusinessRegisterProvider } from '@/providers/BusinessRegisterProvider/ui';

export const FormSwitcher = () => {
	const { eventType } = useSelector((state: RootState) => state.event);

	switch (eventType) {
		case 'БизнесКонференция':
			return (
				<BusinessRegisterProvider>
					<BusinessForm />
				</BusinessRegisterProvider>
			);
		case 'ТинсУрал':
			return <TeensUralForm />;
		case 'ЮсУрал':
			return <YouthUralForm />;
		default:
			return;
	}
};
