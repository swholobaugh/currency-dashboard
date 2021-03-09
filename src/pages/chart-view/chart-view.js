import React from 'react';
import Layout from '../../components/layout/layout';
import ChartCard from '../../components/chart-card/chart-card';
import styles from './chart.module.css';

import {
  Card
} from '@blueprintjs/core';

const ChartView = props => {

  const { equities, firebase, isSignedIn, providerId } = props;
  
  return (
    <Layout firebase={firebase} isSignedIn={isSignedIn} providerId={providerId}>
      <ChartCard equities={equities} />
    </Layout>
  )
}

export default ChartView;