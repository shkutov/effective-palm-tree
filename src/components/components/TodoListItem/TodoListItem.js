/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

// eslint-disable-next-line react/prop-types
const TodoListItem = ({ name, important, done, changeImportant, id }) => {
  return (
    <div className="column is-half">
      <div className="box box-action">
        <span>{name}</span>
        <span
          className="icon"
          onClick={() => changeImportant(id)}
          className={important ? 'has-text-warning' : ''}
        >
          <i className="fas fa-exclamation-triangle" />
        </span>
      </div>
    </div>
  );
};

export default TodoListItem;
