import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, FILTER_TASKS } from './actionTypes';

export const addTask = (taskData) => ({
  type: ADD_TASK,
  payload: taskData
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description }
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: { filter }
});