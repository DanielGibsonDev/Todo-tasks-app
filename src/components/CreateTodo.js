import './styles.css';
import React, { useState } from 'react';
import Checkbox from './Checkbox';

const CreateTodo = ({ onFormSubmit }) => {
  const [todo, setTodo] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit({ todo, completed: false, id: Date.now().toString() });
    setTodo('');
  }

  return (
    <div className="create-todo">
      <form className="form list-item" onSubmit={onSubmit}>
        <Checkbox />
        <input
          className="input"
          type="text"
          placeholder="Create a new todo..."
          name="todo-name"
          value={todo}
          onChange={(event) => setTodo(event.target.value)} />
      </form>
    </div>
  );
};

export default CreateTodo;
