import React from 'react';

const [todoNumber, importantNumber, doneNumber, allTasks] = [1, 2, 3, 4];

const FilterButtonsGroup = () => {
  return (
    <div className="buttons">
      <a className="button is-rounded">
        Todo:
        {` ${todoNumber}`}
      </a>
      <a className="button is-rounded">
        Important:
        {` ${importantNumber}`}
      </a>
      <a className="button is-rounded">
        Done:
        {` ${doneNumber}`}
      </a>
      <a className="button is-rounded">
        All:
        {` ${allTasks}`}
      </a>
    </div>
  );
};

export default FilterButtonsGroup;
