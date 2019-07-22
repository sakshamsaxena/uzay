/*
  Sesitive data and keys goes here
*/
const config = {
  SaltRounds: 10,
  JWTSecret: 'SampleKey',
  MongoURL: 'mongodb://localhost:27017/uzay',
  validEnvForLogger: [
    'DEBUG',
    'STAGING',
    'PRODUCTION'
  ]
}

module.exports = config
