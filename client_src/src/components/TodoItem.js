import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TodoItem extends Component {
  render() {
    const detail = this.props.item.detail ? '✉' : '';
    const location = this.props.item.location ? (
      <p className="task-location">
        <span className="task-icon mr-1">⊙</span>
        {this.props.item.location}
      </p>
    ) : (
      ''
    );
    return (
      <li className="list-item bg-gray dark-shadow p-1 my-1">
        <div className="d-flex space-between">
          <div>
            <span className="task-date">{this.props.item.date}</span>
            <h3 className="task-title">{this.props.item.name}</h3>
            <p className="task-icon text-orange">{detail}</p>
            {location}
          </div>
          <Link
            className="btn bg-green text-white"
            to={`/todos/${this.props.item.id}`}
          >
            Open
          </Link>
        </div>
      </li>
    );
  }
}
export default TodoItem;
