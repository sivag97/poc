import React from "react";

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.taskList.map(task => {
            return (
              <li key={task}>
                {task}
                <button onClick={() => this.props.handleDelete(task)}>
                  NOT NEEDED
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
