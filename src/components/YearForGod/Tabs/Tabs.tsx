'use client';

import { useState } from 'react';
import styles from './styles.module.scss';

interface TabContent {
	id: string;
	title: string;
	content: JSX.Element;
}

interface TabsProps {
	contents: TabContent[];
}

export default function Tabs({ contents }: TabsProps) {
	const [activeTab, setActiveTab] = useState<string>(contents[0]?.id || '');

	return (
		<div className={styles.tabsContainer}>
			<div className='container'>
				<div className={styles.tabsBody}>
					{contents.map(tab => (
						<div key={tab.id} className={styles.tabItem}>
							<div
								className={`${styles.tabHeader} ${
									activeTab === tab.id ? styles.active : ''
								}`}
								onClick={() => setActiveTab(tab.id)}
							>
								<div className={styles.tabTitle}>{tab.title}</div>
								<div className={styles.tabIcon}>
									<TabIcon isActive={activeTab === tab.id} />
								</div>
							</div>

							{activeTab === tab.id && (
								<div className={styles.tabContent}>{tab.content}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const TabIcon = ({ isActive }: { isActive: boolean }) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M12.0001 4.10001C12.4972 4.10001 12.9001 4.50295 12.9001 5.00001V19C12.9001 19.4971 12.4972 19.9 12.0001 19.9C11.503 19.9 11.1001 19.4971 11.1001 19V5.00001C11.1001 4.50295 11.503 4.10001 12.0001 4.10001Z'
			fill='#000'
			style={{ display: isActive ? 'none' : 'block' }}
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M4.1001 12C4.1001 11.5029 4.50304 11.1 5.0001 11.1H19.0001C19.4972 11.1 19.9001 11.5029 19.9001 12C19.9001 12.4971 19.4972 12.9 19.0001 12.9H5.0001C4.50304 12.9 4.1001 12.4971 4.1001 12Z'
			fill='#000'
		/>
	</svg>
);
