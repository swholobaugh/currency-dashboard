import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main/main';

const Pages = props => {
  const { prices } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main prices={prices} />
        </Route>
      </Switch>
    </Router>
  )
}

export default Pages;