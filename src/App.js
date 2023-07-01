import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './Authentication.png';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  authenticationText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 20,
    right: -390,
  },
  auth:{
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 70,
    right: -460,
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background}></div>
      {/* <div className={classes.content}> */}
        {/* <h1>User Information Form</h1> */}
        <Form />
     
      {/* </div> */}
      <div className={classes.authenticationText}>Enhancing Security  </div>
      <div className={classes.auth}> With Authentication</div>
    </div>
  );
};

export default App;
