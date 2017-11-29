import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Todos extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <a href="/">2Do</a>
            <ul>
              <li>
                <Link to="/">All Tasks</Link>
              </li>
              <li>
                <Link to="/todos/add">Add Task</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Todos;
