/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

// eslint-disable-next-line react/prop-types
const TodoListItem = ({ name, important, done, changeImportant, changeStatus, deleteTodo, id }) => {
  return (
    <div className="column is-half">
      <div
        className={!done ? 'box box-action' : 'box box-action has-background-light'}
        onClick={() => changeStatus(id)}
      >
        {!done ? <span>{name}</span> : <s>{name}</s>}

        <span>
          <span
            onClick={e => changeImportant(e, id)}
            className={important ? 'icon has-text-warning' : 'icon'}
          >
            <i className="fas fa-exclamation-triangle" />
          </span>
          <span className="icon delete-icon" onClick={e => deleteTodo(e, id)}>
            <i className="fas fa-trash-alt" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default TodoListItem;
