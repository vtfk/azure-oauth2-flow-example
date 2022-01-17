(async () => {
  const getToken = require('./lib/get-oauth2-flow-token')
  const getData = require('./lib/get-data')

  console.log('Getting token')
  const token = await getToken()
  console.log('Got token')
  console.log('Getting data')
  const data = await getData(token)
  console.log('Got data', data.value || data)
})()
