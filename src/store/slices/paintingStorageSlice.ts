import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDaum as IPaintings } from 'constants/interfaces/IPaintingByIdAnswer';

const initialState: { paintings: IPaintings[] } = {
	paintings: [],
};

export const paintingsStorageSlice = createSlice({
	name: 'paintings',
	initialState,
	reducers: {
		setPaintings: (state, action: PayloadAction<IPaintings[]>) => {
			state.paintings = action.payload;
		},
	},
});

export const { actions, reducer } = paintingsStorageSlice;
