'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

// All Forms
import { ChelFire } from '../TeensUral/ui';
import {
  FaithConferenceForm,
  YouthUralForm,
  BusinessForm,
  YouthMgnForm,
} from '..';
import { RidsForm } from '../Rids/ui';

import { BusinessRegisterProvider } from '@/providers/BusinessRegisterProvider/ui';
import { ChelFireProvider } from '@/providers';
import { LeaderSummitForm } from '../LeadersSummit';

export const FormSwitcher = () => {
  const { eventType } = useSelector((state: RootState) => state.event);

  switch (eventType) {
    case 'БизнесКонференция':
      return (
        <BusinessRegisterProvider>
          <BusinessForm />
        </BusinessRegisterProvider>
      );
    case 'ОгоньЧел':
      return (
        <ChelFireProvider>
          <ChelFire />
        </ChelFireProvider>
      );
    case 'ЮсУрал':
      return <YouthUralForm />;
    case 'КонференцияВеры':
      return <FaithConferenceForm />;
    case 'ЮсМагнитагорск':
      return <YouthMgnForm />;
    case 'СаммитЛидеров': {
      return <LeaderSummitForm />;
    }
    case 'КонференцияРодДетСлуж': {
      return <RidsForm />;
    }
    default:
      return;
  }
};
