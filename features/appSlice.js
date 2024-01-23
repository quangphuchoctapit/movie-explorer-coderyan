// src/features/counter/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        movies: []
    },
    reducers: {
        setMovies: async (state, action) => {
            state.movies = [action.payload]
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement, setMovies } = appSlice.actions;

export default appSlice.reducer;
