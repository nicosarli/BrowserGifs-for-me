const apiKEY = 'qcD3UeTGL9tMu60M3mhkm4ylYyjFlPRL'
const apiURL = 'https://api.giphy.com/v1'

const getGifs = ({ 
  keyword = 'morty',
  limit = 10,
  page = 0,
  rating = 'g',
  language = 'en',
 } = {}) => {
  return fetch(`${apiURL}/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${language}`)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse
  const gifs = data.map(image => {
    const { id, images, title } = image
    const { url } = images.downsized_medium
    return { images, title, id, url }
  })
  return gifs
}

export default getGifs