/*
  Sesitive data and keys goes here
*/

const constants = require('./constants')

const config = {
  SaltRounds: 10,
  Settings: {
    EnvVars: {
      Mocha: [constants.TESTING],
      Logger: [{
        Env: constants.DEBUG,
        Mode: 'dev'
      }, {
        Env: constants.STAGING,
        Mode: 'common'
      }, {
        Env: constants.PRODUCTION,
        Mode: 'combined'
      }],
      Server: [{
        Env: constants.DEBUG,
        JWTSecret: 'SampleKey'
      }, {
        Env: constants.STAGING,
        JWTSecret: 'SampleKey'
      }, {
        Env: constants.PRODUCTION,
        JWTSecret: 'SampleKey'
      }],
      MongoDB: [{
        Env: constants.DEBUG,
        MongoURL: 'mongodb://localhost:27017/uzay'
      }, {
        Env: constants.STAGING,
        MongoURL: 'mongodb://localhost:27017/uzay'
      }, {
        Env: constants.PRODUCTION,
        MongoURL: 'mongodb://localhost:27017/uzay'
      }, {
        Env: constants.TESTING,
        MongoURL: 'mongodb://localhost:27017/uzay'
      }]
    }
  }
}

module.exports = config
