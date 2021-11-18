import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login, Header, Home } from './components';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
