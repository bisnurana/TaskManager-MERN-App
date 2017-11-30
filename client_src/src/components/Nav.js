import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Todos extends Component {
  render() {
    return (
      <div>
        <nav className="bg-blue">
          <div className="container d-flex space-between">
            <div className="nav-brand">
              <Link className="text-white" to="/">
                .Do
              </Link>
            </div>
            <div className="nav-content">
              <ul className="d-flex">
                <li className="list-item">
                  <Link className="text-white" to="/todos/add">
                    Add Task
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="text-white" to="/">
                    <span className="task-icon">⇅</span>
                  </Link>
                </li>

                <li className="list-item">
                  <Link className="text-white" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Todos;
