import React from "react";

import { ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Gif from "../Gif";
import useWidth from '../../hooks/useWidth'

const useStyles = makeStyles((theme) => ({
  imageList: {
    background: "#f99",
    display: "flex",
    justifyContent: "center",
  },

}));



const ListOfGifs = ({ gifs }) => {
  const classes = useStyles();
  const mediaQuery = useWidth()

  return (
    mediaQuery === 'xs'
      ?
      <ImageList rowHeight={200} gap={20} cols={1} className={classes.imageList}>
      {gifs?.map(({ id, title, url, ...restOfGifs }) => (
        <ImageListItem key={id} >
          <Gif
            title={title}
            id={id}
            url={url}
            extraInfo={restOfGifs}
            />
        </ImageListItem>
        ))}
      </ImageList>
      :
    mediaQuery === 'sm' 
      ?
      <ImageList rowHeight={300} gap={20} cols={2} className={classes.imageList}>
      {gifs?.map(({ id, title, url, ...restOfGifs }) => (
        <ImageListItem key={id} >
          <Gif
            title={title}
            id={id}
            url={url}
            extraInfo={restOfGifs}
            />
        </ImageListItem>
      ))}
    </ImageList>
      :
    <ImageList rowHeight={300} gap={20} cols={3} className={classes.imageList}>
      {gifs?.map(({ id, title, url, ...restOfGifs }) => (
        <ImageListItem key={id} >
          <Gif
            title={title}
            id={id}
            url={url}
            extraInfo={restOfGifs}
            />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ListOfGifs;
