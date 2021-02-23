import React, { useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const useStyles = makeStyles(theme => ({
  priceChartRoot: {

  }
}));


const PriceChart = props => {
  const classes = useStyles();
  const theme = useTheme();

  const chartRef = useRef();

  const { prices, symbol, volume } = props;

  const options = {
    rangeSelector: {
      selected: 1
    },
    title: {
    },
    navigator: {
      enabled: false
    },
    series: [{
      type: 'candlestick',
      id: `${symbol}-candlestick`,
      name: `${symbol}`,
      data: prices,
      dataGrouping: {
        units: [
          ['week', [1]], 
          [
            'month',
            [1, 2, 3, 4, 6]
          ]
        ]
      },
      responsive: {
        rules: [{
          condition : {
            maxWidth: 1200
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false
            }
          }
        }]
      }
    }]
  }

  const volumeOptions = {
    series: [{
      type: 'column',
      id: `${symbol}-volume`,
      name: `${symbol} Volume`,
      data: volume,
      yAxis: 1
    }]
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        ref={chartRef}
      />
    </div>
  );
}

export default PriceChart;