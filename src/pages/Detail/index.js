import React from "react";

import useSingleGif from "../../hooks/useSingleGif";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";

const useStyles = makeStyles(() => ({
  cardMedia: {
    maxHeight: "65vh",
    objectFit: "contain",
    paddingTop: "9px",
    background: "#f999",
  },
  cardContent: {
    background: "#f996",
    textAlign: "center",
  },
}));

const Detail = ({ params }) => {
  const classes = useStyles();
  const { gif } = useSingleGif({ id: params.id });

  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title> GIPHY || Detail of {gif.title} </title>
        <meta name="description" content="Detail of the gif" />
      </Helmet>
      <Card>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          image={gif.url}
          title={gif.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography>{gif.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This gif is added by NicoSarli with api of Giphy
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Detail;
