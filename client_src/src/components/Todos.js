import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: ''
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
    if (this.state.todos.length === 0) {
      return (
        <div className="my-3 text-center">
          <span className="status-text">Nothing to show.</span>
          <br />
          <br />
          <p className="feedback-text">Please add your tasks...</p>
          <br />
          <Link className="btn bg-green text-white" to="/todos/add">
            Add now
          </Link>
        </div>
      );
    }
    const todoItem = this.state.todos.reverse().map(item => {
      return <TodoItem key={item.id} item={item} />;
    });
    return (
      <div>
        <h2 className="p-1 text-blue">My Todos</h2>
        <ul className="mx-1">{todoItem}</ul>
      </div>
    );
  }
}

export default Todos;
