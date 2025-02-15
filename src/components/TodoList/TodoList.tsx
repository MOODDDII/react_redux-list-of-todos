import React from 'react';
import { Todo } from '../../types/Todo';
import { Status } from '../../types/Status';

interface TodoListProps {
  todos: Todo[];
  filter: {
    query: string;
    status: Status;
  };
  openModal: (todoId: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, filter, openModal }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter.status !== 'all' && todo.completed !== (filter.status === 'completed')) {
      return false;
    }
    return todo.title.toLowerCase().includes(filter.query.toLowerCase());
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => openModal(todo.id)}>Open</button>
        </li>
      ))}
    </ul>
  );
};
