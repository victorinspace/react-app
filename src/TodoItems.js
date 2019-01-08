import React, { Component } from "react";

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <div>
        <ul className="nes-list is-disc">{listItems}</ul>
        <p>[Tap to remove.]</p>
      </div>;
  }
}

export default TodoItems;
