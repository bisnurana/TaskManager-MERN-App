import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ item }) => (
  <li>
    <Link to={`/todos/${item.id}`}>{item.name}</Link>
  </li>
);
export default TodoItem;
