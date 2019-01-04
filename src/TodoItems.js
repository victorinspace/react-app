import React, { Component } from "react";

class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}></li>
  }
  
  render() {
    const todoEntries = this.props.todoEntries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems;
