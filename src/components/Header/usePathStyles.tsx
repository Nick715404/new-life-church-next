type usePathStylesProps = { pathname: string, };

export function usePathStyles({ pathname }: usePathStylesProps) {
  const whitePaths = ['/', '/events/youth-ural', '/donation' ,'/contacts'];
  return whitePaths.includes(pathname) ? 'white' : 'black';
}