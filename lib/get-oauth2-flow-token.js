const axios = require('axios').default
const qs = require('qs')
const { TOKEN_AUTH, AUTH_URL } = require('../config')

module.exports = async () => {
  const options = {
    url: AUTH_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(TOKEN_AUTH)
  }

  try {
    const { data } = await axios(options)
    const token = `${data.token_type} ${data.access_token}`.trim()
    return token
  } catch (error) {
    const { status, data } = error.response
    console.log('get-oauth2-flow-token: Failed to get OAUTH2 token:', status, data)
    throw error
  }
}
