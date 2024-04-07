import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

export const valueSearchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        setValueSearch: (state, action: PayloadAction<string>) =>{
            state = action.payload;
        }
    }
})

export const {actions,reducer} = valueSearchSlice