import { INavLink } from '@/shared/interfaces/links';
import { CONTACT_INFO } from '@/shared/seo/constants';

export const navLinks: INavLink[] = [
	{
		label: 'О нас',
		path: '/about/foundation',
		children: true,
		subMenu: [
			{
				label: 'Команда',
				path: '/about/team',
			},
			{
				label: 'Ценности',
				path: '/about/valuation',
			},
			{
				label: 'Основание',
				path: '/about/foundation',
			},
			{
				label: 'История церкви',
				path: '/about/history',
			},
		],
	},
	{
		label: 'События',
		path: '/#events',
		children: false,
		subMenu: [],
	},
	// {
	//   label: 'Служения',
	//   path: '/services',
	//   children: false,
	//   subMenu: [],
	// },
	// {
	//   label: 'Обучение',
	//   path: '/education',
	//   children: false,
	//   subMenu: [],
	// },
	{
		label: 'Контакты',
		path: '/contacts',
		children: false,
		subMenu: [],
	},
	{
		label: 'Документы',
		path: '/docs',
		children: false,
		subMenu: [],
	},
];

export const footerContactsInfo = [
	{
		label: CONTACT_INFO.EMAIL,
		path: `mailto: ${CONTACT_INFO.EMAIL}`,
		imgPath: '/img/svg/email.svg',
	},
	{
		label: CONTACT_INFO.PHONE,
		path: `tel: ${CONTACT_INFO.PHONE}`,
		imgPath: '/img/svg/phone.svg',
	},
];

export const footerAccordionData = [
	{
		title: 'Меню',
		items: navLinks,
	},
	{
		title: 'Контакты',
		items: footerContactsInfo,
	},
];
