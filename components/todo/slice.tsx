import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'components/store/store';

interface TodoState {
    data: Object,
    error: Object,
    loading: boolean
};

const initialState: TodoState = {
    data: '',
    error: '',
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
    extraReducers: (builder) =>
        builder.addCase(getTodos.fulfilled, (state, action)) => {
    TodoState.data = action.payload.data;

}.addCase(getTodos.rejected, (state, action)) => {

}.addCase(createTodo.fulfilled, (state, action)) => {

}.addCase(createTodo.rejected, (state, action)) => {

});

export const { decrement, increment } = todoSlice.actions;
export const selectCount = ( state: RootState ) => state.todo.value;
export default todoSlice.reducer;