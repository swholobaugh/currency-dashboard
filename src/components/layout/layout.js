import React from 'react';
import Navbar from '../navbar/navbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  layoutRoot: {
    display: 'flex'
  },
  children: {
    display: 'flex',
    marginTop: '4.5em',
    marginLeft: '.5em',
    marginRight: '.5em',
    width: '100%',
  }
}));

const Layout = props => {
  const classes = useStyles();
  
  const {
    firebase,
    isSignedIn,
    providerId,
    children
  } = props;

  return(
    <div className={classes.layoutRoot}>
      <Navbar firebase={firebase} isSignedIn={isSignedIn} providerId={providerId} />
      <div className={classes.children}>{children}</div>
    </div>
  );
}

export default Layout;