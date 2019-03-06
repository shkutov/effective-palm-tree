import React from 'react';

// eslint-disable-next-line react/prop-types
const TaskInput = ({ addTaskHandle, currentTodoText, onTaskInputChange }) => {
  return (
    <div className="field has-addons" style={{ width: '100%' }}>
      <p className="control" style={{ width: '100%' }}>
        <input
          className="input"
          type="text"
          placeholder="Type a task"
          value={currentTodoText}
          onChange={e => onTaskInputChange(e.target.value)}
        />
      </p>
      <p className="control">
        <button className="button" type="button" onClick={() => addTaskHandle()}>
          Add
        </button>
      </p>
    </div>
  );
};

export default TaskInput;
