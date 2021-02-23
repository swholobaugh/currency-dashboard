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
    
  }
}));


const Main = props => {
  const classes = useStyles();
  const theme = useTheme();

  const { bonds, equities, commodities } = props;
    
  return (
    <Layout props={props}>
      <Grid container className={classes.root}>
        <Grid item xs={4}>
          <MarketCard 
            className={classes.marketCard} 
            market={bonds} 
            title='Bond Market'
          />
        </Grid>
        <Grid item xs={4}>
          <MarketCard 
            className={classes.marketCard} 
            market={equities} 
            title='Equities Market'
          />
        </Grid>
        <Grid item xs={4}>
          <MarketCard 
            className={classes.marketCard} 
            market={commodities} 
            title='Commodities Market'
          />
        </Grid>
      </Grid>
    </Layout>
  );
  
}

export default Main;