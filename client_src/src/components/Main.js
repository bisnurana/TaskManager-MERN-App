import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todos from './Todos';
import About from './About';
import Todo from './Todo';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Todos} />
      <Route exact path="/about" component={About} />
      <Route exact path="/todos/:id" component={Todo} />
    </Switch>
  </main>
);

export default Main;
