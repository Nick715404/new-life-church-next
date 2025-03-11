import { useBusinessRegisterContext } from '@/providers/BusinessRegisterProvider/ui';
import classNames from 'classnames';
import { Fragment, useEffect } from 'react';
import styles from '../model/styles.module.scss';
import { TBusinessPersonType } from '@/types/events';

export const BusinessFormFilter = () => {
	const { formType, setFormType, persons } = useBusinessRegisterContext();

	useEffect(() => {
		if (persons && persons.length > 0) {
			setFormType!(persons[0].attributes.person_type as TBusinessPersonType);
		}
	}, [persons]);

	return (
		<div>
			<div className={styles.filters}>
				{persons &&
					persons.map(({ attributes, id }) => (
						<Fragment key={id}>
							<button
								className={classNames(styles.filterBtn, {
									[styles.active]: formType === attributes.person_type,
								})}
								onClick={() =>
									setFormType!(attributes.person_type as TBusinessPersonType)
								}
							>
								{attributes.person_type === 'Молодежь'
									? 'Молодежь до 21 года'
									: attributes.person_type}
							</button>
						</Fragment>
					))}
			</div>
		</div>
	);
};
