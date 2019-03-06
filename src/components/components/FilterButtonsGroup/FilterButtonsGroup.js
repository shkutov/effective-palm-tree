/* eslint-disable react/prop-types */
import React from 'react';

const FilterButtonsGroup = ({ todos }) => {
  return (
    <div className="buttons">
      <span className="button is-rounded">
        Todo:
        {` ${todos.filter(el => el.done === false).length}`}
      </span>
      <span className="button is-rounded">
        Important:
        {` ${todos.filter(el => el.important === true).length}`}
      </span>
      <span className="button is-rounded">
        Done:
        {` ${todos.filter(el => el.done === true).length}`}
      </span>
      <span className="button is-primary is-rounded">
        All:
        {` ${todos.length}`}
      </span>
    </div>
  );
};

export default FilterButtonsGroup;
