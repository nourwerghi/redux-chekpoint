import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from "./actionTypes";
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
        default:
            return state;
    }
}

export default reducer;