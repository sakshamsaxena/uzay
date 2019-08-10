/*
  Sesitive data and keys goes here
*/

const constants = require('./constants')

const config = {
  SaltRounds: 10,
  Settings: {
    EnvVars: {
      Mocha: [constants.TESTING],
      Morgan: [{
        Env: constants.DEBUG,
        Mode: 'dev'
      }, {
        Env: constants.STAGING,
        Mode: 'common'
      }, {
        Env: constants.PRODUCTION,
        Mode: 'combined'
      }],
      ErrorLog: [{
        Env: constants.TESTING,
        Mode: 'normal'
      }, {
        Env: constants.DEBUG,
        Mode: 'normal'
      }, {
        Env: constants.STAGING,
        Mode: 'normal'
      }, {
        Env: constants.PRODUCTION,
        Mode: 'normal'
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
        MongoURL: 'mongodb://mongodb:27017/uzay'
      }, {
        Env: constants.STAGING,
        MongoURL: 'mongodb://mongodb:27017/uzay'
      }, {
        Env: constants.PRODUCTION,
        MongoURL: 'mongodb://mongodb:27017/uzay'
      }, {
        Env: constants.TESTING,
        MongoURL: 'mongodb://localhost:27017/uzay'
      }]
    }
  }
}

module.exports = config
