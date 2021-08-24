import React from 'react'

import { useLocation } from 'wouter'

import { makeStyles } from '@material-ui/core/styles';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(() => ({
  loadingMessageContainer: {
    display: 'flex',
    background: '#f99',
    justifyContent: 'center'
  },
  loadingMessage: {
    fontSize: '10em'
  },
  icon: {
    width: '1.3em',
    height: '1.3em',
  },
  imageListItem: {
    objectFit: 'none'
  },
}));

const Gif = ({title, url, id}) => {
  
  const classes = useStyles()

  const [ , setLocation] = useLocation()

  return (
      <>
        <img src={url} alt={title}  width='100%' height='100%' className={classes.ImageListItem}/>
        <ImageListItemBar
          title={title}
          actionIcon={
            <IconButton 
            aria-label={`info about ${title}`} 
            color='secondary' 
            onClick={() => { setLocation(`/detail/${id}`) }} 
            >
            <InfoIcon className={classes.icon}/>
            </IconButton>
          }
          />
      </>
  )
}

export default Gif
