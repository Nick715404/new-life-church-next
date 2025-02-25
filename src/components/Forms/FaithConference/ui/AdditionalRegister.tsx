import { Popup } from '@/components/Popup/ui';
import { FormSwitcher } from '../../ui/FormSwitcher';
import { PopupTrigger } from '@/components/Popup/ui/PopupTrigger';
import { PopupContent } from '@/components/Popup/ui/PopupContent';

import styles from '../model/styles.module.scss';
import { FaithConferenceAndSeminarsForm } from './FaithConferenceSeminars';
import { SeminarsForLeaderAndPastors } from './SeminarsForLeaderAndPastors';

export const AdditionalRegister = () => {
	return (
		<div className=''>
			<div className={styles.regItem}>
				<div className={styles.title}>Регистрация на конференцию</div>
				<Popup>
					<PopupTrigger className={styles.btn}>Зарегистрироваться</PopupTrigger>
					<PopupContent>
						<FormSwitcher />
					</PopupContent>
				</Popup>
			</div>
			<div className={styles.regItem}>
				<div className={styles.title}>
					Регистрация на семинары <br /> для пасторов и лидеров
				</div>
				<Popup>
					<PopupTrigger className={styles.btn}>Зарегистрироваться</PopupTrigger>
					<PopupContent>
						<SeminarsForLeaderAndPastors />
					</PopupContent>
				</Popup>
			</div>
			<div className={styles.regItem}>
				<div className={styles.title}>
					Регистрация на <br /> семинары и конференцию
				</div>
				<Popup>
					<PopupTrigger className={styles.btn}>Зарегистрироваться</PopupTrigger>
					<PopupContent>
						<FaithConferenceAndSeminarsForm />
					</PopupContent>
				</Popup>
			</div>
		</div>
	);
};
