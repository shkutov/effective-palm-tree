import React from 'react';

const TaskInput = () => {
  return (
    <div className="field has-addons" style={{ width: '100%' }}>
      <p className="control" style={{ width: '100%' }}>
        <input className="input" type="text" placeholder="Type a task" />
      </p>
      <p className="control">
        <button className="button" type="button">
          Add
        </button>
      </p>
    </div>
  );
};

export default TaskInput;
