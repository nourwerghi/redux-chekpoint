import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../Redux/actions';

const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    dispatch(filterTasks(newFilter));
  };

  return (
    <div className="task-list">
      <div className="filter-buttons">
        <button 
          onClick={() => handleFilterChange('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All ({tasks.length})
        </button>
        <button 
          onClick={() => handleFilterChange('done')}
          className={filter === 'done' ? 'active' : ''}
        >
          Done ({tasks.filter(t => t.isDone).length})
        </button>
        <button 
          onClick={() => handleFilterChange('undone')}
          className={filter === 'undone' ? 'active' : ''}
        >
          Not Done ({tasks.filter(t => !t.isDone).length})
        </button>
      </div>
      
      <div className="tasks-container">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks found</p>
        ) : (
          tasks.filter(task => {
            if (filter === 'done') return task.isDone;
            if (filter === 'undone') return !task.isDone;
            return true;
          }).map(task => (
            <Task key={task.id} task={task} />
          ))
        )}
      </div>

      <div className="task-summary">
        <p>Total: {tasks.length} tasks</p>
        <p>Completed: {tasks.filter(t => t.isDone).length} tasks</p>
        <p>Remaining: {tasks.filter(t => !t.isDone).length} tasks</p>
      </div>
    </div>
  );
};

export default ListTask;