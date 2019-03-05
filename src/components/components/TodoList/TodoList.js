/* eslint-disable react/prop-types */
import React from 'react';
import TodoListItem from '../TodoListItem';

// eslint-disable-next-line react/prop-types
const TodoList = props => {
  const { todos, ...todoProps } = props;
  return (
    <div className="columns is-multiline">
      {todos.map(todoEl => (
        <TodoListItem {...todoEl} key={todoEl.id} {...todoProps} />
      ))}
    </div>
  );
};

export default TodoList;
