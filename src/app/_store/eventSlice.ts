import { fetchSingleEvent } from '@/api/events';
import { getOptions } from '@/api/options';
import { IEvent, IEventInitialState } from '@/shared/interfaces/events';
import { IQueryFromStrapiSingle } from '@/shared/interfaces/queries';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: IEventInitialState = {
	increasedPrice: 0,
	price: 0,
	type: 'default',
	title: '',
	role: 'default',
	slug: '',
};

export const fetchEvent = createAsyncThunk('event', async (slug: string) => {
	const options = getOptions('GET');

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/event/${slug}?populate=background&populate=speakers.image&populate=schedules&populate=gallery`,
		{
			...options,
			cache: 'no-cache',
		}
	);

	if (!response.ok) throw new Error('Error to fetch event');

	const { data }: IQueryFromStrapiSingle<IEvent> = await response.json();
	return data;
});

export const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		addPrice: (state, action) => {
			state.price = action.payload;
		},
		addRole: (state, action) => {
			state.role = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchEvent.fulfilled, (state, action) => {
			state.increasedPrice = action.payload.attributes.increase_price!;
			state.type = action.payload.attributes.event_type;
			state.title = action.payload.attributes.title;
			state.slug = action.payload.attributes.slug;
		});
	},
});

export const { addPrice, addRole } = eventSlice.actions;

export default eventSlice.reducer;
