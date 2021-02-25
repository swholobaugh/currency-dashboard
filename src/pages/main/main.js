import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Layout from '../../components/layout/layout.js';
import Grid from '@material-ui/core/Grid';
import MarketCard from '../../components/market-card/market-card';

const useStyles = makeStyles(theme => ({
  mainRoot: {
    flexGrow: 1,
  },
  marketCard: {
    padding: theme.spacing(0.5)
  }
}));


const Main = props => {
  const classes = useStyles();
  const theme = useTheme();
  
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
  
}

export default Main;