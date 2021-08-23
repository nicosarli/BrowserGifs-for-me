import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { useLocation } from 'wouter';

const useStyles = makeStyles((theme) => ({
  headerContent: {
    background: '#000'
  },
  buttonHome: {
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: '4em',
    color: '#ffff',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [location, setLocation] = useLocation()

  const handleClick = () => {
    setLocation('/')
  }
  
  return (
    <AppBar position="static" className={classes.headerContent}>
      <Toolbar>
        {
          location !== '/' 
            ?
                <Button className={classes.buttonHome} onClick={handleClick}> Giphy </Button>
            : 
                <Button className={classes.buttonHome} disabled  > Giphy </Button>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header
