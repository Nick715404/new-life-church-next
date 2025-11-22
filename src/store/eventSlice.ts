import { TRegisterPerson } from '@/types/events';
import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  registerPersons: TRegisterPerson[];
  eventType:
    | 'ОгоньЧел'
    | 'ЮсУрал'
    | 'БизнесКонференция'
    | 'КонференцияВеры'
    | 'ЮсМагнитагорск'
    | 'СаммитЛидеров'
    | '';
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
      state.registerPersons = [...action.payload];
    },
    getEventType(state, action) {
      state.eventType = action.payload;
    },
  },
});

export const { getRegisterPersons, getEventType } = eventSlice.actions;
export default eventSlice.reducer;
