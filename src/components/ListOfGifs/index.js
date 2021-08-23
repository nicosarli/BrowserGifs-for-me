import React from "react";

import { ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Gif from "../Gif";

const useStyles = makeStyles((theme) => ({
  imageList: {
    background: "#f99",
    display: "flex",
    justifyContent: "center",
  },
}));

const ListOfGifs = ({ gifs }) => {
  const classes = useStyles();

  return (
    <ImageList rowHeight={250} gap={12} cols={3} className={classes.imageList}>
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
