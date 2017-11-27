import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todos from './Todos';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Todos} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
