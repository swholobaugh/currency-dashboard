import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSymbolsStarted } from '../../redux/redux-search/reducer';
import PriceChart from '../../components/charts/price-chart';

import { 
  Card,
  Navbar,
  NavbarGroup,
  InputGroup
} from '@blueprintjs/core';

import styles from './market-card.module.css';

const MarketCard = props => {
  const dispatch = useDispatch();

  const { market, title } = props;
  const priceItems = Object.entries(market);

  const handleChange = async (event) => {
    //console.log(event.target.value);
    await dispatch(fetchSymbolsStarted(event.target.value));
  }

  return (
    <Card className={styles["card"]}>
      <Navbar className={styles["card-header"]}>
        <NavbarGroup>
          <InputGroup onChange={handleChange} />
        </NavbarGroup>
      </Navbar>
      <PriceChart />
    </Card>
  )

  /*
  return (
    <Card
      elevation={0} 
      variant="outlined"
    >
      <CardHeader 
        title={title}
      />
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        centered
      >
        {priceItems.map(item => <Tab key={`tab-${item[1].symbol}`} label={item[1].symbol}/>)}
      </Tabs>
        {priceItems.map((item, index) => 
          <TabPanel key={`tabpanel-${item[1].symbol}`} value={value} index={index}>
            <PriceChart 
              prices={item[1].ohlc}
              symbol={item[1].symbol}
              volume={item[1].volume}
            />
          </TabPanel>  
        )}
    </Card>    
  );*/
  
}

export default MarketCard;