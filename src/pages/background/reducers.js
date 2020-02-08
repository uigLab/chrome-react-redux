import {combineReducers} from 'redux';
import {
    ADD_TASK,
    REMOVE_TASK
} from '../constants';


const defaultTasks = [
    {
        id: 1,
        title: "Learn JS"
    },
    {
        id: 2,
        title: "Make todo with JS"
    }
]

const tasksReducer = (state = defaultTasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, {id: state.length + 1, title: action.value}];
    case REMOVE_TASK:
      return [...state.filter(task => task.id !== action.taskId)];
    default:
      return state;
  }
};



export default combineReducers({
    tasks: tasksReducer
});
