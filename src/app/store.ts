import { configureStore } from '@reduxjs/toolkit';
import { Status } from '../types/Status';
import { Todo } from '../types/Todo';

interface FilterState {
  query: string;
  status: Status;
}

interface TodosState {
  todos: Todo[];
  loading: boolean;
}

type CurrentTodoState = Todo | null;

const rootReducer = {
  filter: (state: FilterState = { query: '', status: 'all' }, action: any): FilterState => {
    switch (action.type) {
      case 'filter/setQuery':
        return { ...state, query: action.payload };
      case 'filter/setStatus':
        return { ...state, status: action.payload };
      default:
        return state;
    }
  },
  todos: (state: TodosState = { todos: [], loading: false }, action: any): TodosState => {
    switch (action.type) {
      case 'todos/setTodos':
        return { ...state, todos: action.payload };
      case 'todos/setLoading':
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  },
  currentTodo: (state: CurrentTodoState = null, action: any): CurrentTodoState => {
    switch (action.type) {
      case 'currentTodo/setCurrent':
        return action.payload;
      default:
        return state;
    }
  },
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
