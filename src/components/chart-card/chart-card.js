import React from 'react';
import styles from './chart-card.module.css';

import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { Grid, GridRows, GridColumns } from '@visx/grid';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear, scaleTime } from '@visx/scale';
import { timeFormat, timeParse } from 'd3-time-format';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { LegendOrdinal } from '@visx/legend';
import { BoxPlot } from '@visx/stats';

import { 
  XYChart, 
  AnimatedBarSeries,
  AnimatedGrid,
  AnimatedAxis,
  Tooltip 
} from '@visx/xychart';

import {
  Card,
  Navbar,
  NavbarGroup,
  NavbarHeader,
  InputGroup,
} from '@blueprintjs/core';

import {
  Suggest
} from '@blueprintjs/select';

const ChartCard = props => {

  const { equities } = props;
  //console.log(equities);
  const data = equities.ndx;
  console.log(data);
  
  const dataLength = data.ohlc.length;
  
  const priceData = data.ohlc.map(item => {
    return {
      closeDate: item[0],
      open: item[1],
      high: item[2],
      low: item[3],
      close: item[4],
      hollow: item[4] > item[1]
    }
  });
  
  const maxHighPrice = Math.max(...priceData.map(item => Math.max(...[item.high, item.open, item.close])));
  const minLowPrice = Math.min(...priceData.map(item => Math.min(...[item.low, item.open, item.close])));

  const start = Math.min(...priceData.map(item => item.closeDate));
  const end = Math.max(...priceData.map(item => item.closeDate));

  const chartWidth = 1200;
  const chartHeight = 600;

  const margin = { top: 10, bottom: 10, left: 10, right: 10 };

  const xScale = scaleBand({
    range: [20, chartWidth - 50],
    domain: priceData.map(item => item.closeDate),
    padding: 0.3
  });

  const timeScale = scaleTime({
    range: [0, chartWidth - 50],
    domain: [start, end]
  });

  const yScale = scaleLinear({
    range: [chartHeight - margin.bottom, 20],
    domain: [minLowPrice - 3, maxHighPrice]
  });
  
  
  return (
    <Card>
      <Navbar
        className={styles['nav']}
      >
      </Navbar>
      <div>
        <svg width={chartWidth} height={chartHeight}>
          <Group top={margin.top} left={margin.left}>
            <rect width={chartWidth} height={chartHeight} />
            <GridRows 
              width={chartWidth} 
              height={chartHeight}
              scale={yScale}
            />
            <GridColumns 
              width={chartWidth}
              height={chartHeight - margin.bottom}
              scale={timeScale}
              stroke="rgba(255,255,255,0.1"
            />
          </Group>
          {
            priceData.map(item => {
              return (
                <g key={`item-${item.closeDate}`}>
                  <line 
                    x1={xScale(item.closeDate) + xScale.bandwidth() / 2}
                    x2={xScale(item.closeDate) + xScale.bandwidth() / 2}
                    y1={yScale(item.high)}
                    y2={item.hollow ? yScale(item.close) : yScale(item.low)}
                    stroke="white"
                    strokeWidth={1}
                  />
                  <line 
                    x1={xScale(item.closeDate) + xScale.bandwidth() / 2}
                    x2={xScale(item.closeDate) + xScale.bandwidth() / 2}
                    y1={item.hollow ? yScale(item.open) : yScale(item.close)}
                    y2={yScale(item.low)}
                    stroke="white"
                    strokeWidth={1}
                  />
                  <Bar 
                    data={priceData}
                    width={xScale.bandwidth()}
                    height={
                      item.hollow
                      ? yScale(item.open) - yScale(item.close)
                      : yScale(item.close) - yScale(item.open)
                    }
                    fill={item.hollow ? 'transparent' : 'white'}
                    stroke={item.hollow ? 'white' : 'transparent'}
                    strokeWidth={1}
                    x={xScale(item.closeDate)}
                    y={item.hollow ? yScale(item.close) : yScale(item.open)}
                  />
                </g>
              )
            })
          }
          
        </svg>
      </div>
    </Card>
  )

  
  
  
  
  
}

export default ChartCard;