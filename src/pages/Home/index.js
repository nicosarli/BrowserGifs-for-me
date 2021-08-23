import React from 'react'
import SearchGifs from "../../components/SearchGifs";
import ListOfGifs from '../../components/ListOfGifs';
import useGif from '../../hooks/useGif';

import {Helmet} from "react-helmet";

const Home = () => {
  const { gifs } = useGif()
  return (
    <div>
      <Helmet>
        <title> GIPHY || Home </title>
        <meta name="description" content="Home of the page" />
      </Helmet>
      <SearchGifs  />
      <ListOfGifs gifs={gifs} />
    </div>
  )
}

export default Home
