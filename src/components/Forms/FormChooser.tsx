import styles from './Forms.module.scss';
import { IEventType } from '@/interfaces/events';
import { TeensForm, GDBForm, BussinessForm, StandartForm, YouthForm } from '.';

type FormChooserProps = { type: IEventType, slug?: string };

export function FormChooser({ type, slug }: FormChooserProps) {
  switch (type) {
    case 'default':
      return <StandartForm slug={slug!} />;
    case 'бизнесс':
      return <BussinessForm />;
    case 'гдб':
      return <GDBForm />;
    case 'тинсурал':
      return <TeensForm />;
    case 'укв':
      return <StandartForm slug={slug!} />;
    case 'юсурал':
      return <StandartForm slug={slug!} />;
  }
};