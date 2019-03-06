/* eslint-disable react/prop-types */
import React from 'react';
import TodoListItem from '../TodoListItem';

// eslint-disable-next-line react/prop-types
const TodoList = props => {
  const { todos, filteredTodos, ...todoProps } = props;

  return (
    <div className="columns is-multiline">
      {filteredTodos(todos).map(todoEl => (
        <TodoListItem {...todoEl} key={todoEl.id} {...todoProps} />
      ))}
    </div>
  );
};

export default TodoList;
