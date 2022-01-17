require('dotenv').config()

module.exports = {
  TOKEN_AUTH: {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: process.env.GRANT_TYPE || 'client_credentials',
    resource: process.env.RESOURCE || 'https://management.azure.com'
  },
  AUTH_URL: process.env.AUTH_URL || 'https://login.microsoftonline.com/vtfk.onmicrosoft.com/oauth2/token',
  API_URL: process.env.API_URL
}
