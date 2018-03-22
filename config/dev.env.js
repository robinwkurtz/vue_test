'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CLIENT_KEY: '"3d5a583b-a942-4307-be81-1b2a0ca468aa"'
})
