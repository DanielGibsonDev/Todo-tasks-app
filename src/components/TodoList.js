import './styles.css';
import React from 'react';
import Checkbox from './Checkbox';
import IconCross from '../images/icon-cross.svg';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = ({ todos, setTodos, handleTodoAction, filterType }) => {

  const renderedTodos = todos.map(({ todo, completed, id }, index) => {

    if (filterType === 'active' && completed) return
    if (filterType === 'completed' && !completed) return

    return (
      <Draggable key={id} index={index} draggableId={id}>
        {(provided) => (
          <div className="item-container list-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div className={`item-container-2 ${completed && 'completed-todo'}`}>
              <Checkbox
                completed={completed}
                handleTodoAction={handleTodoAction}
                index={index}
              />
              {todo}
            </div>
            <img
              className="icon-cross"
              src={IconCross}
              alt="Delete Todo"
              onClick={() => handleTodoAction('delete', index)}
            />
          </div>
        )}
      </Draggable>
    );
  });

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const copyOfTodos = Array.from(todos);
    const [reorderedTodo] = copyOfTodos.splice(result.source.index, 1);
    copyOfTodos.splice(result.destination.index, 0, reorderedTodo);
    setTodos(copyOfTodos);
  }

  return (
    <div className="todo-list">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todo-list-drop-area">
          {(provided) => (
            <div className="todo-list-drop-area" {...provided.droppableProps} ref={provided.innerRef}>
              {renderedTodos}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
