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
        <h2 className="p-1 text-blue">Add your Task</h2>
        <form
          className="bg-gray px-1 py-3 mx-1 dark-shadow d-flex fade-animate"
          onSubmit={this.onSubmit.bind(this)}
        >
          <div className="col-6">
            <label>Task Name:</label>
            <input
              className=" input d-block mb-1"
              type="text"
              name="name"
              ref="name"
              required
            />
            <label>Date:</label>
            <input
              className="input d-block mb-1"
              type="date"
              name="date"
              ref="date"
            />
            <label>Location:</label>
            <input
              className=" input d-block mb-1"
              type="text"
              name="location"
              ref="location"
            />
          </div>
          <div className="col-6">
            <label>Note:</label>
            <textarea
              className="d-block input-note"
              type="text"
              name="note"
              ref="note"
            />
            <br />
            <a
              className="btn bg-orange text-white mr-1"
              onClick={this.props.history.goBack}
            >
              Cancel
            </a>
            <button
              type="submit"
              value="submit"
              className="btn bg-green text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddTodo;
