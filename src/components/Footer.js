import './styles.css';
import React, { useState, useEffect } from 'react';

const Footer = ({ todos, handleTodoAction, handleFilterChange }) => {
  const [activeTodos, setActiveTodos] = useState(0);
  const [selected, setSelected] = useState('all');

  // Check number of todos left
  useEffect(() => {
    let itemsLeft = 0;
    todos.map((todo) => {
      if (!todo.completed) itemsLeft++;
    });
    setActiveTodos(itemsLeft);
  }, [todos]);

  useEffect(() => {
    handleFilterChange(selected);
  }, [selected]);

  return (
    <div className="footer">
      <div className="first-container list-item">
        <div className="items-left todos-left">
          {`${activeTodos} ${activeTodos === 1 ? 'item' : 'items'} left`}
        </div>
        <div className="second-container list-item hide-on-mobile">
          <span
            onClick={() => setSelected('all')}
            className={`${selected === 'all' ? 'filter-active' : ''}`}
          >All</span>
          <span
            onClick={() => activeTodos && setSelected('active')}
            className={`
            ${selected === 'active' ? 'filter-active' : ''}
            ${!activeTodos ? 'disabled' : ''}
          `}
          >Active</span>
          <span
            onClick={() => {
              if (todos.length && activeTodos !== todos.length) setSelected('completed');
            }}
            className={`
            ${selected === 'completed' ? 'filter-active' : ''}
            ${activeTodos === todos.length ? 'disabled' : ''}
          `}
          >Completed</span>
        </div>
        <div className="clear-completed" onClick={() => handleTodoAction('clear')}>
          Clear Completed
        </div>
      </div>
      <div className="second-container list-item hide-on-desktop">
        <span
          onClick={() => setSelected('all')}
          className={`${selected === 'all' ? 'filter-active' : ''}`}
        >All</span>
        <span
          onClick={() => activeTodos && setSelected('active')}
          className={`
            ${selected === 'active' ? 'filter-active' : ''}
            ${!activeTodos ? 'disabled' : ''}
          `}
        >Active</span>
        <span
          onClick={() => {
            if (todos.length && activeTodos !== todos.length) setSelected('completed');
          }}
          className={`
            ${selected === 'completed' ? 'filter-active' : ''}
            ${activeTodos === todos.length ? 'disabled' : ''}
          `}
        >Completed</span>
      </div>
    </div>
  );
};

export default Footer;