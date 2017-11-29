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
      .get(`http://localhost:3000/api/todos/${id}`)
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
        url: `http://localhost:3000/api/todos/${this.state.id}`,
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
        <h1>Add your Task</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Task Name:</label>
          <input
            type="text"
            name="name"
            ref="name"
            required
            value={this.state.name}
            onChange={this.onInputChange.bind(this)}
          />
          <label>Note:</label>
          <textarea
            type="text"
            name="detail"
            ref="note"
            value={this.state.detail}
            onChange={this.onInputChange.bind(this)}
          />
          <label>Date:</label>
          <input
            type="date"
            name="date"
            ref="date"
            value={this.state.date}
            onChange={this.onInputChange.bind(this)}
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            ref="location"
            value={this.state.location}
            onChange={this.onInputChange.bind(this)}
          />
          <button onClick={this.props.history.goBack}>Cancel</button>
          <button type="submit" value="Submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditTodo;
