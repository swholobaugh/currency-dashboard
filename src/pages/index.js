import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChartView from './chart-view/chart-view';
import Main from './dashboard/dashboard';

const Pages = props => {

  const { 
    bonds, 
    equities, 
    commodities, 
    firebase,
    isSignedIn,
    providerId
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isSignedIn && 
            <Main 
              bonds={bonds} 
              equities={equities} 
              commodities={commodities}
              firebase={firebase}
              isSignedIn={isSignedIn}
              providerId={providerId}
            />}
        </Route>
        <Route path="/chart">
          {isSignedIn &&
            <ChartView
              equities={equities}
              firebase={firebase}
              isSignedIn={isSignedIn}
              providerId={providerId}
            />
          }
        </Route>
      </Switch>
    </Router>
  )
}

export default Pages;