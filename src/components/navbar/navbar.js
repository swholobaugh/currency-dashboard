import React, { useState } from 'react';

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
  console.log(firebase);

  const handleLogout = () => {
    firebase.auth().signOut();
  }

  return(
    <Menu minimal="true">
      <MenuItem text="Dashboard" icon="dashboard" />
      <MenuItem text="Chart" icon="chart" />
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