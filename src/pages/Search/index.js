import React, { useEffect, useRef, useCallback } from "react";

import useGif from "../../hooks/useGif";
import useNearScreen from "../../hooks/useNearScreen";

import ListOfGifs from "../../components/ListOfGifs";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import debounce from "just-debounce-it";
import SpinerLoading from "../../components/SpinnerLoading";
import { Helmet } from "react-helmet";

const useStyles = makeStyles(() => ({
  tittleSearchGif: {
    background: "#f999",
    padding: "10px",
    margin: 0,
    textAlign: "center",
  },
}));

const Search = ({ params }) => {
  const classes = useStyles();

  const { keyword, rating, language } = params;

  const { gifs, loading, setPage } = useGif({ keyword, rating, language });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debouceHandleNextPage = useCallback(
      debounce(() => setPage((prevPage) => prevPage + 1), 350),
    [setPage],
  )

  useEffect(() => {
    if (isNearScreen) debouceHandleNextPage();
  }, [debouceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <>
          <Helmet>
            <title> GIPHY || Searching {keyword}... </title>
            <meta name="description" content="Searching the gif" />
          </Helmet>
          <SpinerLoading />
        </>
      ) : (
        <div>
          <Helmet>
            <title> GIPHY || Search of {keyword} </title>
          </Helmet>
          <Typography variant="h2" className={classes.tittleSearchGif}>
            {decodeURI(keyword)}
          </Typography>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef} />
        </div>
      )}
    </>
  );
};

export default Search;
