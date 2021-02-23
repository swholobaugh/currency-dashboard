import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Layout from '../../components/layout/layout.js';
import Grid from '@material-ui/core/Grid';
import MarketCard from '../../components/market-card/market-card';

const useStyles = makeStyles(theme => ({
  mainRoot: {
    flexGrow: 1,
  },
  priceCard: {
    display: 'flex',
  },
  priceHeader: {
    position: 'relative',
    height: '2em',
    width: '100%'
  },
  priceChart: {
    display: 'flex',
    position: 'relative'
  }
}));


const Main = props => {
  const classes = useStyles();
  const theme = useTheme();

  const { bonds } = props;
    
  return (
    <Layout props={props}>
      <Grid container className={classes.root}>
        <Grid item xs={4}>
          <MarketCard market={bonds} title='Bond Market'/>
        </Grid>
      </Grid>
    </Layout>
  );
  
}

export default Main;