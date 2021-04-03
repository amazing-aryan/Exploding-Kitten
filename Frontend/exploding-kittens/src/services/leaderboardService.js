import axios from 'axios'

const baseUrl = 'http://localhost:8081/api/leaderboard'

const getLeaderboard = () => {
  const promise = axios.get(baseUrl)
  return promise.then(res => res.data)
}

// eslint-disable-next-line
export default { getLeaderboard }