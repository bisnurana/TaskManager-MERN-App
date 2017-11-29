import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Main from './components/Main';
import Nav from './components/Nav';

const App = () => (
  <div>
    <Nav />
    <div className="container my-3">
      <Main />
    </div>

    <div>
      <Link className="btn-float text-white bg-blue" to="/todos/add">
        +
      </Link>
    </div>
  </div>
);

export default App;
