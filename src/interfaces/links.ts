export interface INavLink {
  label: string;
  path: string;
  children: number;
  subMenu: INavLinkChildren[];
}

export interface INavLinkChildren {
  label: string;
  path: string;
}