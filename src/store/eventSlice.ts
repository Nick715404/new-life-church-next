import { TRegisterPerson } from '@/types/events';
import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
	registerPersons: TRegisterPerson[];
	eventType: 'ТинсУрал' | 'ЮсУрал' | 'БизнесКонференция' | 'Прихожанин' | '';
};

const initialState: TInitialState = {
	registerPersons: [],
	eventType: '',
};

const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		getRegisterPersons(state, action) {
			console.log({
				payload: action.payload,
			});
			state.registerPersons = [...action.payload];
		},
		getEventType(state, action) {
			console.log({
				payload: action.payload,
			});
			state.eventType = action.payload;
		},
	},
});

export const { getRegisterPersons, getEventType } = eventSlice.actions;
export default eventSlice.reducer;
