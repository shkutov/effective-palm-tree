import React from 'react';

const SearchPanel = ({ onSearch }) => {
  return (
    <div className="field ">
      <p className="control">
        <input className="input" type="text" placeholder="Find a task" onChange={onSearch} />
      </p>
    </div>
  );
};

export default SearchPanel;
