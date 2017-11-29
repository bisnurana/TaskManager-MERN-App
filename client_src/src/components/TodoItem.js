import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ item }) => (
  <li>
    <div>
      <h2>{item.name}</h2>
      <h3>{item.date}</h3>
      <h3>{item.location}</h3>
      <p>{item.detail}</p>

      <Link to={`/todos/${item.id}`}>Open</Link>
    </div>
  </li>
);
export default TodoItem;
