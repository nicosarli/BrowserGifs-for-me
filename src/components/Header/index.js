import React from 'react';

import useWidth from "../../hooks/useWidth";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Typography } from '@material-ui/core';
import { useLocation } from 'wouter';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  headerContent: {
    background: '#000',
    padding: '7px'
  },
  ToolbarContentXs: {
    display: 'flex',
    flexDirection: 'column',
  },

  ToolbarContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonIcon: {
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: '2.5em',
  },
  title: {
    fontWeight: '500'
  }

}));

const Header = () => {
  const classes = useStyles();
  const [location, setLocation] = useLocation()

  const mediaQuery = useWidth()

  const navegationToHome = () => {
    setLocation('/')
  }

  const navegationToRegister = () => {
    setLocation('/register')
  }

  const navegationToLogin = () => {
    setLocation('/login')
  }
  
  return (
    <AppBar position="static" className={classes.headerContent}>
      <Toolbar className={mediaQuery === 'xs' ? classes.ToolbarContentXs : classes.ToolbarContent}>
        <div>
          <Typography variant="h1" color="secondary" className={classes.title}>Giphy</Typography>
        </div>
        
        <div>
          {
            location !== '/register'
            ?
            <Button color="secondary" onClick={navegationToRegister}> Register </Button>
            :
            null
          }
          {
            location !== '/login'
            ?
              <Button color="secondary" onClick={navegationToLogin}> Login </Button>
              :
              null
          }
          {
            location !== '/'
              ?
              <Button onClick={navegationToHome} > <HomeIcon color='secondary' className={classes.buttonIcon} /> </Button>
              :
              null
          }
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
