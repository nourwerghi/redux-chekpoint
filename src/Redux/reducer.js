import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, FILTER_TASKS, DELETE_TASK } from "./actionTypes";
import tasksData from "../components/TasksData";

const initialState = {
    tasks: tasksData
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => 
                    task.id === action.payload 
                        ? { ...task, isDone: !task.isDone }
                        : task
                )
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? { ...task, description: action.payload.description }
                        : task
                )
            };
        case FILTER_TASKS:
            return {
                ...state,
                tasks: state.tasks.filter(task => {
                    if (action.payload === 'all') return true;
                    if (action.payload === 'done') return task.isDone;
                    if (action.payload === 'undone') return !task.isDone;
                    return true;
                })
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        default:
            return state;
    }
}

export default reducer;