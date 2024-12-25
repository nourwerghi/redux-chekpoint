import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../Redux/actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedDescription.trim() !== '') {
      dispatch(editTask(task.id, editedDescription));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="view-mode">
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete} className="delete-btn">Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;