import { INavLink } from "@/interfaces/links";

export const navLinks: INavLink[] = [
  {
    label: 'О нас',
    path: '/about',
    children: true,
    subMenu: [
      {
        label: 'Команда',
        path: '/about/team'
      },
      {
        label: 'Ценности',
        path: '/about/valuation'
      },
      {
        label: 'Основание',
        path: '/about/foundation'
      },
      {
        label: 'История Церкви',
        path: '/about/history'
      },
    ],
  },
  {
    label: 'События',
    path: '/events',
    children: false,
    subMenu: [],
  },
  {
    label: 'Служения',
    path: '/services',
    children: true,
    subMenu: [
      {
        label: 'Служения',
        path: '/services'
      },
      {
        label: 'Служения',
        path: '/services'
      },
      {
        label: 'Служения',
        path: '/services'
      },
    ],
  },
  {
    label: 'Обучение',
    path: '/education',
    children: true,
    subMenu: [
      {
        label: 'Обучение',
        path: '/education'
      },
    ],
  },
  {
    label: 'Контакты',
    path: '/contacts',
    children: false,
    subMenu: [],
  },
]