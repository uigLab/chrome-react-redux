import {ADD_TASK, REMOVE_TASK} from '../constants';



export function addTask(task) {
    return {
      type: ADD_TASK,
      value: task
    };
}

export function removeTask(taskId) {
    return {
      type: REMOVE_TASK,
      taskId
    };
}
