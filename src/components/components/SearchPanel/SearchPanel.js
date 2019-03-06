import React from 'react';

const SearchPanel = () => {
  return (
    <div className="field has-addons">
      <p className="control">
        <input className="input" type="text" placeholder="Find a task" />
      </p>
      <p className="control">
        <button className="button" type="button">
          Search
        </button>
      </p>
    </div>
  );
};

export default SearchPanel;
