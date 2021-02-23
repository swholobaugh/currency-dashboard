import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  newsRoot: {
    display: 'flex'
  },
}));


const NewsCard = props => {
  const classes = useStyles();

  return (
    <div>News Card Component</div>
  )
}

export default NewsCard;
