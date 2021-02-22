import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/Appbar';

const useStyles = makeStyles(theme => ({
  navbarRoot: {
    display: 'flex'
  },
  appBar: {
    height: '3.75em'
  }
}));

const Navbar = ({props}) => {
  const styleClasses = useStyles();
  const theme = useTheme();

  return(
    <AppBar position="fixed" className={styleClasses.appBar}>
      
    </AppBar>
  );
}

export default Navbar;