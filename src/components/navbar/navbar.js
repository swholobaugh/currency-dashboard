import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { 
  Alignment, 
  Classes, 
  Navbar, 
  NavbarGroup, 
  NavbarHeading,
  Button,
  Divider,
  Menu,
  MenuItem
} from '@blueprintjs/core';

import { Popover2 } from '@blueprintjs/popover2';

import { Select } from '@blueprintjs/select';

import styles from './navbar.module.css';

const NavMenu = props => {
  const firebase = props.firebase;
  const history = useHistory();

  const handleLogout = () => {
    firebase.auth().signOut();
  }

  return(
    <Menu minimal="true">
      <MenuItem 
        text="Dashboard" 
        icon="dashboard"
        onClick={() => history.push('/')} 
      />
      <MenuItem 
        text="Chart" 
        icon="chart"
        onClick={() => history.push('/chart')} 
      />
      <Menu.Divider />
      <MenuItem text="Logout" onClick={handleLogout} icon="log-out" />
    </Menu>
  )
}

const Nav = props => {
  const firebase = props.firebase;

  return(
    <div className={Classes.DARK}>
      <Navbar className={styles['nav']}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>marketDashboard</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Popover2 
            content={<NavMenu firebase={firebase} />}
            placement="left-end"
            minimal={true}
            transitionDuration={100}
          >
            <Button icon="cog" minimal={true} />
          </Popover2>
        </NavbarGroup>
      </Navbar>
    </div>
  );

}

export default Nav;