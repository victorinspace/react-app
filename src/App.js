import React, { Component } from "react";
import TodoList from "./TodoList"
import "./App.css";
class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }

  handleInput = e => {
    console.log('Hello Input')
  }

  addItem = e => {
    e.preventDefault()
    console.log('Hello Add Item')
  }

  render() {
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem} 
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
      </div>
    );
  }
}
export default App;
