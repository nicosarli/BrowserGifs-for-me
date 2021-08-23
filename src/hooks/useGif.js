import { useEffect, useContext, useState } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0

const useGif = ({keyword, rating, language} = {keyword: null}) => {
  const { gifs, setGifs } = useContext(GifsContext)  
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'Morty'
  
  useEffect(() => {
    setLoading(true)
    //recuperamos la key

    getGifs({ keyword: keywordToUse, rating, language }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
      //seteamos la key

      localStorage.setItem('lastKeyword', keywordToUse)
        })
  }, [setGifs, keyword, keywordToUse, rating, language])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page,}).then(nextGifs => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })

  },[keywordToUse, page, setGifs])

  return { gifs, loading, setPage, loadingNextPage }
}

export default useGif
