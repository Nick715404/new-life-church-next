import styles from './Forms.module.scss';
import { IEventType } from '@/interfaces/events';
import { TeensForm, GDBForm, BussinessForm, StandartForm, YouthForm } from '.';

type FormChooserProps = { type: IEventType, slug?: string };

export function FormChooser({ type, slug }: FormChooserProps) {
  switch (type) {
    case 'default':
      return <StandartForm slug={slug!} />;
    case 'business':
      return <BussinessForm slug={slug!} />;
    case 'uralFaithCond':
      return <GDBForm />;
    case 'teensUral':
      return <TeensForm />;
    case 'worshipConf':
      return <StandartForm slug={slug!} />;
    case 'youthUral':
      return <StandartForm slug={slug!} />;
  }
};