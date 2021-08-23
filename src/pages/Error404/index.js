import React from 'react'

import { useLocation } from 'wouter'

import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  notFoundContainer: {
    background: '#f99',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    height: '100vh'
  },
  tittleError: {
    fontSize: '9em',
    margin: 0
  },
  subTittleError: {
    fontSize: '2.5em'
  }
}))

const Error404 = () => {
  const classes = useStyles()
  const [location, ] = useLocation()

  return (
    <div className={classes.notFoundContainer}>
      <Helmet>
        <title> GIPHY || ERROR404 </title>
        <meta name="description" content="Error404 - Page not found or other error" />
      </Helmet>
      <h1 className={classes.tittleError}>ERROR 404! :(</h1>
      <h2 className={classes.subTittleError}>Page {location} not found</h2>
    </div>
  )
}

export default Error404
