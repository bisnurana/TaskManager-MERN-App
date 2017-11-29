import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todos from './Todos';
import About from './About';
import Todo from './Todo';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Todos} />
      <Route exact path="/about" component={About} />
      <Route exact path="/todos/add" component={AddTodo} />
      <Route exact path="/todos/edit/:id" component={EditTodo} />
      <Route exact path="/todos/:id" component={Todo} />
    </Switch>
  </main>
);

export default Main;
