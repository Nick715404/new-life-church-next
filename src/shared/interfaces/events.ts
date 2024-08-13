import { IStrapiImage } from './queries';
import { ISpeakerData } from './speakers';
import { IBigDescriptionChildren } from './utils';

export interface IEvent {
	title: string;
	small_description: string;
	full_description: IBigDescriptionChildren[];
	slug: string;
	reg_price: number;
	increase_date?: string;
	increase_price?: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	event_type: IEventType;
	background: { data: IStrapiImage };
	gallery: { data: TGalleryImage[] };
	speakers: { data: ISpeakerData[] };
	schedules: { data: ISchedule[] };
	event_items: { data: TEventItems[] };
}

export type IEventType =
	| 'uralFaithCond'
	| 'youthUral'
	| 'teensUral'
	| 'business'
	| 'worshipConf'
	| 'default';

export interface ISchedule {
	id: number;
	attributes: {
		date: string;
		time: string;
		description: string;
		speaker?: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
}

export type TGalleryImage = {
	id: number;
	attributes: {
		name: string;
		alternativeText: null | string;
		caption: null | string;
		width: number;
		height: number;
		formats: [Object];
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: null | string;
		provider: string;
		provider_metadata: null | Object;
		createdAt: string;
		updatedAt: string;
	};
};

export interface IEventInitialState {
	price: number;
	increasedPrice: number;
	type: string;
	title: string;
	role: string;
	slug: string;
}

export type TEventItems = {
	id: number;
	attributes: {
		createdAt: string;
		updatedAt: string;
		price: string;
		increased_price_date: string;
		increase_price: string;
		paymentType: string;
	};
};
