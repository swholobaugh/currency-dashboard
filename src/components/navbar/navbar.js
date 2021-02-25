import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  navbarRoot: {
    display: 'flex'
  },
  appBar: {
    height: '3.75em'
  },
  menuButton: {
    alignSelf: 'flex-end'
  },
}));

const Navbar = props => {
  const classes = useStyles();
  const theme = useTheme();
  const firebase = props.firebase;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    setAnchorEl(null);
    firebase.auth().signOut();
  }

  return(
    <AppBar position="fixed" className={classes.appBar}>
      <div className={classes.menuButton}>
        <IconButton 
          id='menu' 
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu 
          id='menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </AppBar>
  );
}

export default Navbar;