import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Layout from '../../components/layout/layout.js';
import PriceChart from '../../components/charts/price-chart';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
  mainRoot: {
    flexGrow: 1,
  },
  priceCard: {
    display: 'flex',
  },
  priceChart: {

  }
}));

const Main = props => {
  const classes = useStyles();
  const theme = useTheme();

  const { prices } = props;

  return (
    <Layout props={props}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Card className={classes.priceCard}>
            <CardContent>
              <PriceChart prices={prices} />
            </CardContent>
          </Card>    
        </Grid>
      </Grid>
    </Layout>
  );

}

export default Main;