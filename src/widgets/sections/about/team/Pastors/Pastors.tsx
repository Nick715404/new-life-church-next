import { halvar } from '@/shared/constants/fonts';
import styles from './Pastors.module.scss';
import { PastorsList } from './PastorsList';
import { MotionBox } from '@/components/MotionBox';

const Pastors = () => {
	return (
		<section className={styles.section}>
			<div className='container-small'>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<MotionBox>
							<h2 className={`${styles.title} ${halvar.className}`}>
								Пасторская
								<br />
								команда
							</h2>
						</MotionBox>
						<MotionBox delay={0.1}>
							<p className={styles.text}>
								Люди, которые взяли ответсвенность за служения и посвещены в
								служение.
							</p>
						</MotionBox>
					</div>
					<PastorsList />
				</div>
			</div>
		</section>
	);
};

export { Pastors };
