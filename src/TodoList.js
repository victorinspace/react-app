import React, { Component } from "react";

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>What 2 Do?</h1>
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              type="text"
              className="nes-input"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button className="nes-btn is-primary" type="submit">Add Task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
