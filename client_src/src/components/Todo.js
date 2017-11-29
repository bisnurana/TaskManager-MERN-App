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
      <div className="mx-1">
        <p>{date}</p>
        <div className="d-flex space-between bg-gray p-1 dark-shadow">
          <div className="col-6">
            <h2 className="text-blue">{this.state.todo.name}</h2>

            <p>{this.state.todo.location}</p>
          </div>
          <p className=" col-6 task-detail text-gray">
            {this.state.todo.detail}
          </p>
        </div>

        <br />
        <a
          className="btn text-white bg-red f-left mr-1"
          onClick={this.onDelete.bind(this)}
        >
          Delete
        </a>
        <a
          className="btn text-white bg-blue f-right"
          onClick={this.props.history.goBack}
        >
          Back
        </a>
        <Link
          className="btn text-white bg-orange f-left"
          to={`/todos/edit/${this.state.todo.id}`}
        >
          Edit
        </Link>
      </div>
    );
  }
}
export default Todo;
