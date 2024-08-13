import styles from './Forms.module.scss';
import { IEventType } from '@/shared/interfaces/events';
import {
	TeensForm,
	GDBForm,
	BussinessForm,
	StandartForm,
	YouthForm,
} from '../../forms/ui';

type FormChooserProps = { type: IEventType; slug?: string };

export function FormChooser({ type, slug }: FormChooserProps) {
	switch (type) {
		case 'default':
			return null;
		case 'business':
			return <BussinessForm slug={slug!} />;
		case 'uralFaithCond':
			return <GDBForm />;
		case 'teensUral':
			return <TeensForm />;
		case 'worshipConf':
			return null;
		case 'youthUral':
			return <YouthForm slug={slug!} />;
	}
}
