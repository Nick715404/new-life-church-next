'use client';

import { fetchEvent } from '@/store/eventSlice';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

type EventProviderProps = {
	children: React.ReactNode;
	slug: string;
};

export const EventProvider = ({ children, slug }: EventProviderProps) => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchEvent(slug));
	}, [slug]);

	return <>{children}</>;
};
