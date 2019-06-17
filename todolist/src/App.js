import React from "react";
import List from "./List";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      taskList: []
    };
  }
  handleDelete = remove => {
    const newTask = this.state.taskList.filter(task => {
      return task !== remove;
    });
    this.setState({
      taskList: newTask
    });
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { task, taskList } = this.state;
    this.setState({
      taskList: [...taskList, task]
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>NEEDED</button>
        <List taskList={this.state.taskList} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
