type usePathStylesProps = { pathname: string };

export function usePathStyles({ pathname }: usePathStylesProps) {
	const whitePaths = [
		'/',
		'/donation',
		'/contacts',
		'/hello',
		'/events/youth-ural',
		'/events/business-conf',
		'/events/ural-faith-conf',
		'/events/chel-fire',
		'/youth-magnitogorsk',
	];
	return whitePaths.includes(pathname) ? 'white' : 'black';
}
