import './styles.css';
import React from 'react';
import iconCheckmark from '../images/icon-check.svg';

const Checkbox = ({ completed, index, handleTodoAction }) => {

  if (typeof completed === 'undefined') {
    return (
      <div className="checkbox-container">
        <div className="checkbox-custom icon-hidden no-cursor">
          <img className="icon" src={iconCheckmark} alt="Completed checkmark" />
        </div>
      </div>
    );
  };

  return (
    <div className="checkbox-container">
      <input name="Completed Checkbox" className="checkbox-hidden" type="checkbox" />
      <div
        className={`checkbox-custom ${completed ? 'completed' : 'icon-hidden'}`}
        onClick={() => handleTodoAction('completed', index)}
      >
        <img className="icon" src={iconCheckmark} alt="Check mark" />
      </div>
    </div>
  );
};

export default Checkbox;
