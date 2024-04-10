import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: { value: string; sort: boolean } = {
	value: '',
	sort: false,
};

export const valueSearchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setValueSearch: (
			state,
			action: PayloadAction<{ value: string; sort: boolean }>
		) => {
			state.value = action.payload.value;
			state.sort = action.payload.sort;
		},
	},
});

export const { actions, reducer } = valueSearchSlice;
