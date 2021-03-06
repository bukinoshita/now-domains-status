'use strict'

const { encode: encodeQuery } = require('querystring')
const fetch = require('node-fetch')
const getToken = require('./lib/get-token')

module.exports = async (name, { secret } = {}) => {
  if (!name) {
    throw new Error('`domain` is not defined')
  }

  const token = secret ? secret : await getToken()
  const query = encodeQuery({ name })
  const res = await fetch(`https://api.zeit.co/domains/status?${query}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  const json = await res.json()

  return json
}
