import React, { useState } from 'react';

const FilterButtonsGroup = ({ todos, changeCurrentFilter }) => {
  const [currentFilter, setFilter] = useState('all');

  const changeFilter = e => {
    if (e.target.dataset.type) setFilter(e.target.dataset.type);
    changeCurrentFilter(e.target.dataset.type);
  };

  return (
    <div className="buttons" onClick={changeFilter}>
      <span
        className={currentFilter === 'todo' ? 'button is-primary is-rounded' : 'button is-rounded'}
        data-type="todo"
      >
        Todo:
        {` ${todos.filter(el => el.done === false).length}`}
      </span>
      <span
        className={
          currentFilter === 'important' ? 'button is-primary is-rounded' : 'button is-rounded'
        }
        data-type="important"
      >
        Important:
        {` ${todos.filter(el => el.important === true).length}`}
      </span>
      <span
        className={currentFilter === 'done' ? 'button is-primary is-rounded' : 'button is-rounded'}
        data-type="done"
      >
        Done:
        {` ${todos.filter(el => el.done === true).length}`}
      </span>
      <span
        className={currentFilter === 'all' ? 'button is-primary is-rounded' : 'button is-rounded'}
        data-type="all"
      >
        All:
        {` ${todos.length}`}
      </span>
    </div>
  );
};

export default FilterButtonsGroup;
