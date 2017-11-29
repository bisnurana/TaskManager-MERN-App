import React, { Component } from 'react';
import axios from 'axios';
class AddTodo extends Component {
  addTodo(newTask) {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:3000/api/todos',
        data: newTask
      })
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  onSubmit(e) {
    e.preventDefault();
    const newTask = {
      name: this.refs.name.value,
      detail: this.refs.note.value || '',
      date: this.refs.date.value || '',
      location: this.refs.location.value || ''
    };
    this.addTodo(newTask);
  }
  render() {
    return (
      <div>
        <h1>Add your Task</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Task Name:</label>
          <input type="text" name="name" ref="name" required />
          <label>Note:</label>
          <textarea type="text" name="note" ref="note" />
          <label>Date:</label>
          <input type="date" name="date" ref="date" />
          <label>Location:</label>
          <input type="text" name="location" ref="location" />
          <button onClick={this.props.history.goBack}>Cancel</button>
          <button>Save</button>
        </form>
      </div>
    );
  }
}
export default AddTodo;
