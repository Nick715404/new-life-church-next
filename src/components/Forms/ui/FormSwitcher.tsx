'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { TeensUralForm } from '../TeensUral/ui';
import { FaithConferenceForm, YouthUralForm, BusinessForm } from '..';
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
		case 'КонференцияВеры':
			return <FaithConferenceForm />;
		default:
			return;
	}
};
