import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main/main';

const Pages = props => {
  const { bonds, equities, commodities } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main bonds={bonds} equities={equities} commodities={commodities}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Pages;