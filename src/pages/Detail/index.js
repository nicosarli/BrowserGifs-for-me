import React from "react";

import useSingleGif from "../../hooks/useSingleGif";
import useWidth from "../../hooks/useWidth"

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
  cardMediaXs: {
    height: "60vh",
    objectFit: "cover",
    paddingTop: "9px",
    background: "#f999",
  },

  cardContent: {
    textAlign: "center",
  },
  pageContent: {
    height: '100vh',
    background: "#f996",
  }
}));

const Detail = ({ params }) => {
  const classes = useStyles();
  const { gif } = useSingleGif({ id: params.id });

  const mediaQuery = useWidth()

  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title> GIPHY || Detail of {gif.title} </title>
        <meta name="description" content="Detail of the gif" />
      </Helmet>
      <Card className={classes.pageContent}>
        <CardMedia
          className={mediaQuery === 'xs' ? classes.cardMediaXs : classes.cardMedia}
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
