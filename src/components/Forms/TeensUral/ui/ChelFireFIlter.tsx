import { useChelFireContext } from '@/providers';
import styles from '../model/styles.module.scss';
import classNames from 'classnames';
import { Fragment, useEffect } from 'react';
import { TChelFirePersonType } from '@/types/events';

export const ChelFireFilter = () => {
	const { formType, setFormType, persons } = useChelFireContext();

	useEffect(() => {
		if (persons && persons.length > 0) {
			setFormType!(persons[0].attributes.person_type as TChelFirePersonType);
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
									setFormType!(attributes.person_type as TChelFirePersonType)
								}
							>
								{attributes.person_type === 'РодительИлиСлужитель'
									? 'Родитель или служитель'
									: attributes.person_type}
							</button>
						</Fragment>
					))}
			</div>
		</div>
	);
};
