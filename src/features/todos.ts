import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';
import { getTodos } from '../api';

interface TodosState {
  todos: Todo[];
  loading: boolean;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setTodos, setLoading } = todosSlice.actions;

export const fetchTodos = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  const todos = await getTodos();
  dispatch(setTodos(todos));
  dispatch(setLoading(false));
};

export default todosSlice.reducer;
