import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const [isDone, setIsDone] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Date.now(),
        description: description.trim(),
        isDone
      };
      dispatch(addTask(newTask));
      setDescription('');
      setIsDone(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
        required
      />
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
          className="task-checkbox"
        />
        Done
      </label>
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
};

export default AddTask;