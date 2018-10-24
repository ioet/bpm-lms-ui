import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://997u182sr0.execute-api.us-east-2.amazonaws.com/production`
  })
}