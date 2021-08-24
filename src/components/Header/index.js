import React from 'react';
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
  ToolbarContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonIcon: {
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: '4em',
  },
  title: {
    fontWeight: '500'
  }

}));

const Header = () => {
  const classes = useStyles();
  const [location, setLocation] = useLocation()

  const handleClick = () => {
    setLocation('/')
  }
  
  return (
    <AppBar position="static" className={classes.headerContent}>
      <Toolbar className={classes.ToolbarContent}>
        <Typography variant="h1" color="secondary" className={classes.title}>Giphy</Typography>
        {
          location !== '/'
            ?
            <Button onClick={handleClick} > <HomeIcon color='secondary' className={classes.buttonIcon} /> </Button>
            :
            null
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header
