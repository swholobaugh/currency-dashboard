import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chart from 'react-apexcharts';


const useStyles = makeStyles(theme => ({
  priceChartRoot: {

  }
}));

const chartOptions = {
  options: {
    chart: {
      id: 'candlestick',
    }
  }
}

const PriceChart = props => {
  const classes = useStyles();
  const theme = useTheme();

  const { prices } = props;
  
  const data = prices.prices.candles.map((item) => {
    return {
      x: new Date(item.datetime).toLocaleDateString(), 
      y: [item.open, item.high, item.low, item.close]};
  });

  const chartSeries = {
    series: [
      {
        name: 'series-1',
        data
      }
    ]
  }

  return (
    <Chart 
      options={chartOptions.options}
      series={chartSeries.series}
      type='candlestick'
      width='500'
    />
  );
}

export default PriceChart;