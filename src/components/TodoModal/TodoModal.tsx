import React from 'react';

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: any;
}

export const TodoModal: React.FC<TodoModalProps> = ({ isOpen, onClose, todo }) => {
  if (!isOpen || !todo) return null;

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" onClick={onClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title" data-cy="modal-header">
            {todo.title}
          </div>
          <button
            type="button"
            className="delete"
            data-cy="modal-close"
            onClick={onClose}
          />
        </header>
        <div className="modal-card-body">
          <p className="block" data-cy="modal-title">{todo.title}</p>
          <p className="block" data-cy="modal-user">
            <strong className="has-text-danger">{todo.completed ? 'Completed' : 'Planned'}</strong>
            by <a href="mailto:Sincere@april.biz">Leanne Graham</a>
          </p>
          <p className="block" data-cy="modal-description">{todo.description}</p>
        </div>
      </div>
    </div>
  );
};
