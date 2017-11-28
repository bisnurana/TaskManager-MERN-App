import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  componentWillMount() {
    this.getTodos();
  }
  getTodos() {
    axios
      .get('http://localhost:3000/api/todos')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    const todoItem = this.state.todos.map(item => {
      return <TodoItem key={item.id} item={item} />;
    });
    return (
      <div>
        <h1>My Todos</h1>
        <ul>{todoItem}</ul>
      </div>
    );
  }
}

export default Todos;
