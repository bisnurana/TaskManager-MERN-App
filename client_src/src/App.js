import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Main from './components/Main';
import Nav from './components/Nav';

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Main />
    </div>

    <div>
      <Link to="/todos/add">Add</Link>
    </div>
  </div>
);

export default App;
