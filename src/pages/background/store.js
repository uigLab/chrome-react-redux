import {createStore} from 'redux';
import {createBackgroundStore} from 'redux-webext';
import {ADD_TASK, REMOVE_TASK} from '../constants';
import reducer from './reducers';
import {addTask, removeTask} from './actions';

const store = createStore(reducer);

export default createBackgroundStore({
  store,
  actions: {
    ADD_TASK: addTask,
    REMOVE_TASK: removeTask
  }
});
