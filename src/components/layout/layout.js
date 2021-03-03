import React from 'react';
import Nav from '../navbar/navbar';

import { Classes } from '@blueprintjs/core';
import styles from './layout.module.css';

const Layout = props => {
  
  const {
    firebase,
    isSignedIn,
    providerId,
    children
  } = props;

  return(
    <div className={Classes.DARK}>
      <Nav firebase={firebase} isSignedIn={isSignedIn} providerId={providerId} />
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default Layout;