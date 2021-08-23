import { useState, useEffect } from 'react'
import getSingleGif from '../services/getSingleGif';
import useGif from '../hooks/useGif'

const useSingleGif = ({ id }) => {
  const { gifs } = useGif()
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id)
  
  const [gif, setGif] = useState(gifFromCache)
  
  useEffect(() => {
    if (!gif) {
      getSingleGif({ id })
        .then(gif => setGif(gif))
    }
  }, [id, gif])

  return { gif }
}

export default useSingleGif
