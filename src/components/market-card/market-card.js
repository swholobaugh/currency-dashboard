import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymbolsStarted } from '../../redux/redux-search/reducer';
import { getSymbolList } from '../../redux/redux-search/selectors/index';
import PriceChart from '../../components/charts/price-chart';
import styles from './market-card.module.css';

import { 
  Button,
  Card,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  InputGroup,
  Menu,
  MenuItem,
  Position
} from '@blueprintjs/core';

import { Select } from '@blueprintjs/select';


const MarketCard = props => {
  const { market, title } = props;
  const priceItems = Object.entries(market);

  const [chart, setChart] = useState();


  const renderChart = () => {
    return (
      chart && <PriceChart prices={chart.ohlc} symbol={chart.symbol} volume={chart.volume} />
    )
  }

  const handleItemSelect = event => {
    const chartSelection = priceItems.filter(item => item[1].symbol === event);
    setChart({
      ohlc: chartSelection[0][1].ohlc,
      volume: chartSelection[0][1].volume,
      symbol: chartSelection[0][1].symbol
    });
  }

  const renderItem = (item, { handleClick, modifiers, query }) => {
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        onClick={handleClick}
        text={item}
      />
    )
  }

  return (
    <Card className={styles["card"]}>
      <Navbar className={styles["card-header"]}>
        <NavbarGroup>
          <Select
            filterable={false}
            items={['FVX', 'TNX', 'TYX']}
            itemRenderer={renderItem}
            onItemSelect={handleItemSelect}
          >
            <Button text="Bonds" />
          </Select>
        </NavbarGroup>
      </Navbar>
      {renderChart()}
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