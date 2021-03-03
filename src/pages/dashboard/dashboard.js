import React from 'react';
import Layout from '../../components/layout/layout.js';
import MarketCard from '../../components/market-card/market-card';

import styles from './dashboard.module.css';

const Main = props => {
  
  const { 
    bonds, 
    equities, 
    commodities,
    firebase,
    isSignedIn,
    providerId 
  } = props;

  return (
    <Layout firebase={firebase} isSignedIn={isSignedIn} providerId={providerId}>
      <MarketCard 
        className={styles['market-card']}
        market={bonds} 
        title='Bond Market'
      />
    </Layout>
  );
  
  /*
  return (
    <Layout firebase={firebase} isSignedIn={isSignedIn} providerId={providerId}>
      <Grid container className={classes.root}>
        <Grid item xs={4} className={classes.marketCard} >
          <MarketCard 
            market={bonds} 
            title='Bond Market'
          />
        </Grid>
        <Grid item xs={4} className={classes.marketCard} >
          <MarketCard 
            market={equities} 
            title='Equities Market'
          />
        </Grid>
        <Grid item xs={4} className={classes.marketCard} >
          <MarketCard 
            market={commodities} 
            title='Commodities Market'
          />
        </Grid>
      </Grid>
    </Layout>
  );
  */
}

export default Main;