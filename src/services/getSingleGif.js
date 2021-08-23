const apiKEY = 'qcD3UeTGL9tMu60M3mhkm4ylYyjFlPRL'
const apiURL = 'https://api.giphy.com/v1'

const getSingleGif = ({ id }) => {
  return fetch(`${apiURL}/gifs/${id}?api_key=${apiKEY}`)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse
  const { images, title, id} = data
  const { url } = images.downsized_medium
  return { title, id, url }
}

export default getSingleGif