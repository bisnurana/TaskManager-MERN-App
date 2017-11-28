import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }
  componentWillMount() {
    this.getDetails();
  }
  getDetails() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/todos/${id}`)
      .then(response => {
        this.setState({ todo: response.data });
        console.log(this.state.todo);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>{this.state.todo.name}</h1>
        <p>{this.state.todo.detail}</p>
        <br />
        <button onClick={this.props.history.goBack}>Back</button>
        <Link to={`/todos/edit/${this.state.todo.id}`}>Edit</Link>
        <button>Delete</button>
      </div>
    );
  }
}
export default Todo;
