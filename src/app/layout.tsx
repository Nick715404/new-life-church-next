import '@/shared/styles/globals.scss';
import '@/shared/styles/typography.scss';
import '@/shared/styles/swiper.scss';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { montserrat } from '@/constants/fonts';
import { META_DATA } from '@/shared/seo/constants';
import { StoreProvider } from './_store';

export const metadata = META_DATA;

interface IProps {
	children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: IProps) {
	return (
		<html lang='ru'>
			<body className={montserrat.className}>
				<div className='page'>
					<StoreProvider>
						<Header />
						{children}
						<Footer />
					</StoreProvider>
				</div>
			</body>
		</html>
	);
}
