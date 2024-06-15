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
        label: 'История церкви',
        path: '/about/history'
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
]