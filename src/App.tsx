import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Loader, TodoFilter, TodoList, TodoModal } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const { todos, loading } = useSelector((state: RootState) => state.todos);
  const filter = useSelector((state: RootState) => state.filter);

  const openModal = (todo: any) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTodo(null);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              <TodoList todos={todos} filter={filter} openModal={openModal} />
            </div>
          </div>
        </div>
      </div>

      <TodoModal isOpen={isModalOpen} onClose={closeModal} todo={currentTodo} />
    </>
  );
};
