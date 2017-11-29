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
      })
      .catch(err => console.log(err));
  }
  onDelete() {
    const taskId = this.state.todo.id;
    axios
      .delete(`http://localhost:3000/api/todos/${taskId}`)
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.todo.date === undefined) {
      return <div />;
    }
    const date = String(this.state.todo.date).substring(0, 10);
    return (
      <div>
        <h1>{this.state.todo.name}</h1>
        <p>{date}</p>
        <p>{this.state.todo.location}</p>
        <p>{this.state.todo.detail}</p>
        <br />
        <button onClick={this.props.history.goBack}>Back</button>
        <button onClick={this.onDelete.bind(this)}>Delete</button>
        <Link to={`/todos/edit/${this.state.todo.id}`}>Edit</Link>
      </div>
    );
  }
}
export default Todo;
