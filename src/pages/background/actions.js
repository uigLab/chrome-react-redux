import {
  ADD_TASK,
  REMOVE_TASK
} from "../constants";

export function addTask({ value }) {
  return {
    type: ADD_TASK,
    value
  };
}
export function removeTask({ taskId }) {
  return {
    type: REMOVE_TASK,
    taskId
  };
}
