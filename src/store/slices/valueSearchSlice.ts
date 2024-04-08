import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: { value: string } = { value: '' };

export const valueSearchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setValueSearch: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { actions, reducer } = valueSearchSlice;
