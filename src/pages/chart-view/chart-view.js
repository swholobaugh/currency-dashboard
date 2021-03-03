import React from 'react';
import Layout from '../../components/layout/layout';

const ChartView = props => {

  const { firebase, isSignedIn, providerId } = props;
 
  return (
    <Layout firebase={firebase} isSignedIn={isSignedIn} providerId={providerId}>
      
    </Layout>
  )
}

export default ChartView;