import React from 'react';

// eslint-disable-next-line react/prop-types
const TaskInput = ({ addTaskHandle, currentTodoText, onTaskInputChange }) => {
  return (
    <form className="field has-addons" style={{ width: '100%' }} onSubmit={(e) => addTaskHandle(e)}>
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
        <button className="button" type="button" onClick={(e) => addTaskHandle(e)}>
          Add
        </button>
      </p>
    </form>
  );
};

export default TaskInput;
