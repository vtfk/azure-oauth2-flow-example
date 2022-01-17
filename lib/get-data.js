const axios = require('axios').default
const { API_URL } = require('../config')

module.exports = async token => {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    const { data } = await axios.get(API_URL, headers)
    return data
  } catch (error) {
    const { status, data } = error.response
    console.log('get-data: Failed to get data:', status, data)
    throw error
  }
}
