import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../Redux/actions';

const ListTask = () => {
  const [filter, setFilter] = useState('ALL');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    dispatch(filterTasks(newFilter));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'DONE':
        return task.isDone;
      case 'NOT_DONE':
        return !task.isDone;
      default:
        return true;
    }
  });

  return (
    <div className="task-list">
      <div className="filter-buttons">
        <button 
          onClick={() => handleFilterChange('ALL')}
          className={filter === 'ALL' ? 'active' : ''}
        >
          All ({tasks.length})
        </button>
        <button 
          onClick={() => handleFilterChange('DONE')}
          className={filter === 'DONE' ? 'active' : ''}
        >
          Done ({tasks.filter(t => t.isDone).length})
        </button>
        <button 
          onClick={() => handleFilterChange('NOT_DONE')}
          className={filter === 'NOT_DONE' ? 'active' : ''}
        >
          Not Done ({tasks.filter(t => !t.isDone).length})
        </button>
      </div>
      
      <div className="tasks-container">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks found</p>
        ) : (
          filteredTasks.map(task => (
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