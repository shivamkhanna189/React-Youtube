import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        addItemToCache: (state, action) => {
            state = Object.assign(state,action.payload );
        }
    }
})

export const { addItemToCache } = searchSlice.actions;

export default searchSlice.reducer; 