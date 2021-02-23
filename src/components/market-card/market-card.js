import React, { useState } from 'react';
import { makeStyles, Table, useTheme } from '@material-ui/core';
import PriceChart from '../../components/charts/price-chart';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  mainRoot: {
    flexGrow: 1,
  }
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

const MarketCard = props => {
  const classes = useStyles();
  const theme = useTheme();

  const { market, title } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const priceItems = Object.entries(market);

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
  );
  
}

export default MarketCard;