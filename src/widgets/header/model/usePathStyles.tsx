type usePathStylesProps = { pathname: string, };

export function usePathStyles({ pathname }: usePathStylesProps) {
  const whitePaths = ['/', '/events/youth-ural', '/donation' ,'/contacts', '/hello'];
  return whitePaths.includes(pathname) ? 'white' : 'black';
}