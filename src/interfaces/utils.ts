export interface ILinksBlocks<T> {
  big: {
    label: string
  },
  topLeft: T
  topRight: T,
  bottomLeft: T,
  bottomRight: T,
}

export interface ILinkInBlock {
  href: string;
  label: string;
}