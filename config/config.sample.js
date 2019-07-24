/*
  Sesitive data and keys goes here
*/

const Constants = {
  DEBUG: 'DEBUG',
  STAGING: 'STAGING',
  TESTING: 'TESTING',
  PRODUCTION: 'PRODUCTION'
}

const config = {
  SaltRounds: 10,
  JWTSecret: 'SampleKey',
  MongoURL: 'mongodb://localhost:27017/uzay',
  Settings: {
    EnvVars: {
      Mocha: [Constants.TESTING],
      Logger: [Constants.DEBUG, Constants.STAGING],
      Instance: [Constants.DEBUG, Constants.STAGING, Constants.PRODUCTION]
    }
  },
  Constants: Constants
}

module.exports = config
