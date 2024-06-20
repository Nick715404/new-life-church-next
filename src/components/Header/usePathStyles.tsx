type usePathStylesProps = { pathname: string, };

export function usePathStyles({ pathname }: usePathStylesProps) {
  const whitePaths = ['/', '/events/youth-ural'];
  return whitePaths.includes(pathname) ? 'white' : 'black';
}