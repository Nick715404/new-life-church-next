export interface INavLink {
  label: string;
  path: string;
  children: boolean;
  subMenu: INavLinkChildren[];
}

export interface INavLinkChildren {
  label: string;
  path: string;
}

export interface ISocialLink<T> {
  tag: T;
  path: T;
}

export interface IFooterContactsInfo {
  label: string,
  path: string,
  imgPath: string,
};