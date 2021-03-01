import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const useStyles = makeStyles(theme => ({
  loginRoot: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8em'
  },
  loginHeader: {
    alignSelf: 'center'
  },
  loginDetails: {

  }
}));


const Login = props => {
  const classes = useStyles();
  const theme = useTheme();

  const firebase = props.firebase;

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ]
  }

  return (
    <div className={classes.loginRoot}>
      <h1 className={classes.loginHeader}>Please Sign In To Continue</h1>
      <StyledFirebaseAuth 
        className={classes.loginDetails} 
        uiConfig={uiConfig} 
        firebaseAuth={firebase.auth()} 
      />
    </div>
  )
}

export default Login;