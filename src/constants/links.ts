import { INavLink } from "@/interfaces/links";

export const navLinks: INavLink[] = [
  {
    label: 'О нас',
    path: '/about',
    children: 1,
    subMenu: [
      {
        label: 'О нас',
        path: '/about'
      },
    ],
  },
  {
    label: 'События',
    path: '/events',
    children: 0,
    subMenu: [],
  },
  {
    label: 'Служения',
    path: '/services',
    children: 1,
    subMenu: [
      {
        label: 'Служения',
        path: '/services'
      },
    ],
  },
  {
    label: 'Обучение',
    path: '/education',
    children: 1,
    subMenu: [
      {
        label: 'Обучение',
        path: '/studying'
      },
    ],
  },
  {
    label: 'Контакты',
    path: '/contacts',
    children: 0,
    subMenu: [],
  },
]