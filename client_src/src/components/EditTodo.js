import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class EditTodo extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      detail: '',
      date: '',
      location: ''
    };
  }
  componentWillMount() {
    this.getDetails();
  }
  getDetails() {
    const id = this.props.match.params.id;
    axios
      .get(`/api/todos/${id}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          detail: response.data.detail,
          location: response.data.location,
          date: response.data.date
        });
      })
      .catch(err => console.log(err));
  }
  saveDetails(editedTask) {
    axios
      .request({
        method: 'put',
        url: `/api/todos/${this.state.id}`,
        data: editedTask
      })
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  onSubmit(e) {
    e.preventDefault();
    const editedTask = {
      name: this.refs.name.value,
      detail: this.refs.note.value || '',
      date: this.refs.date.value || '',
      location: this.refs.location.value || ''
    };
    this.saveDetails(editedTask);
  }
  onInputChange(e) {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
    console.log(name, value);
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
              value={this.state.name}
              onChange={this.onInputChange.bind(this)}
            />
            <label>Date:</label>
            <input
              className="input d-block mb-1"
              type="date"
              name="date"
              ref="date"
              value={this.state.date}
              onChange={this.onInputChange.bind(this)}
            />
            <label>Location:</label>
            <input
              className=" input d-block mb-1"
              type="text"
              name="location"
              ref="location"
              value={this.state.location}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
          <div className="col-6">
            <label>Note:</label>
            <textarea
              className="d-block input-note"
              type="text"
              name="detail"
              ref="note"
              value={this.state.detail}
              onChange={this.onInputChange.bind(this)}
            />
            <br />

            <a
              className="btn bg-orange text-white mr-1"
              onClick={this.props.history.goBack}
            >
              Cancel
            </a>
            <button
              className="btn bg-green text-white"
              type="submit"
              value="Submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditTodo;
