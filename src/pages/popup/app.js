import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  state = {
    inputVal: ""
  };

  inputChangeHandler = e => {
    this.setState({ inputVal: e.target.value });
  };

  addTaskHandler = () => {
    if (this.state.inputVal.length < 3) return;
    this.props.addTask(this.state.inputVal);
    this.setState({ inputVal: "" });
  };

  render() {
    const { tasks, removeTask } = this.props;

    return (
      <div style={{ width: "300px" }}>
        <div>
          <div>
            <input
              value={this.state.inputVal}
              onChange={this.inputChangeHandler}
            />{" "}
            <button onClick={this.addTaskHandler}>Add Task</button>
          </div>
          <div>
            <ul>
              {tasks.map((task, i) => (
                <li key={task.id}>
                  {i + 1}. {task.title}{" "}
                  <button onClick={() => removeTask(task.id)}>-</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state, actions)(App);
