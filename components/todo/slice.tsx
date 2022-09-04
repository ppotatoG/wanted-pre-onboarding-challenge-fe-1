import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'components/store/store';

interface TodoState {
    value: number
};

const initialState: TodoState = {
    value: 0
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { decrement, increment } = todoSlice.actions;
export const selectCount = ( state: RootState ) => state.todo.value;
export default todoSlice.reducer;