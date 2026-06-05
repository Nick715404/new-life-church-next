import { INavLink } from '@/types/links';
import { CONTACT_INFO } from '@/seo/constants';

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
    path: '#',
    children: true,
    subMenu: [
      {
        label: 'Мероприятия',
        path: '/#events',
      },
      {
        label: 'Библейские семинары',
        path: '/biblical-seminars',
      },
    ],
  },
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
