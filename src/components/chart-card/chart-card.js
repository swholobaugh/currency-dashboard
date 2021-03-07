import React from 'react';
import styles from './chart-card.module.css';

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
  
  return (
    <Card>
      <Navbar
        className={styles['nav']}
      >

      </Navbar>
    </Card>
  )
}

export default ChartCard;