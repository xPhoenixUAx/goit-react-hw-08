import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        name: "",
	}
}

const slice = createSlice({
    name: 'searchContact',
    initialState,

    reducers: {
        changeFilter: (state, action) => {
            state.filters.name = action.payload
            
        },
    }
})


export const filtersReducer = slice.reducer
export const {changeFilter, changeFilterNumber} = slice.actions