import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'components/store/store';
import axios from 'axios';

interface TodoState {
    data: null | Object,
    error: null | Object,
    loading: boolean
};

const initialState: TodoState = {
    data: null,
    error: null,
    loading: false
};

const getTodos = createAsyncThunk(
    'users/fetchById',
    // if you type your function argument here
    async (userId: number) => {
        const response = await axios.get(`http://localhost:8080/todos`)
        return (await response.json()) as Returned
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // ...
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.error = null,
                state.loading = true
            })
            .addCase(getTodos.fulfilled, (state, { payload }) => {
                    state.error = null,
                    state.loading = false,
                    state.data = payload
            })
            .addCase(getTodos.rejected, (state, { payload }) => {
                    state.error = payload;
                    state.loading = false;
            })
    }
});

export const { decrement, increment } = todoSlice.actions;
export const selectCount = ( state: RootState ) => state.todo.value;
export default todoSlice.reducer;