import axios from 'axios'

const baseUrl = 'http://localhost:8081/api/game'

const getGame = username => {
  const promise = axios.get(`${baseUrl}/${username}`)
  return promise.then(res => res.data)
}

const create = newObject => {
  const promise = axios.post(baseUrl, newObject)
  return promise.then(response => response.data)
}

// eslint-disable-next-line
export default { getGame, create }