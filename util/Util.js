/**
 * Utility Functions for keeping code clean
 */

const config = require('../config/config')

function getMorganModeWithCheck (env) {
  let loggerVars = config.Settings.EnvVars.Morgan
  for (let i = 0; i < loggerVars.length; i++) {
    let envVar = loggerVars[i].Env
    if (envVar === env) {
      return loggerVars[i].Mode
    }
  }
  return false
}

function getMongoURLFromConfig (env) {
  let serverVars = config.Settings.EnvVars.MongoDB
  for (let i = 0; i < serverVars.length; i++) {
    let envVar = serverVars[i].Env
    if (envVar === env) {
      return serverVars[i].MongoURL
    }
  }
  return ''
}

function getServerRunMode (env) {
  let serverVars = config.Settings.EnvVars.Server
  for (let i = 0; i < serverVars.length; i++) {
    let envVar = serverVars[i].Env
    if (envVar === env) {
      return true
    }
  }
  return false
}

function getErrorLoggingSetting (env) {
  let logVars = config.Settings.EnvVars.ErrorLog
  for (let i = 0; i < logVars.length; i++) {
    let envVar = logVars[i].Env
    if (envVar === env) {
      return logVars[i].Mode
    }
  }
  return false
}

module.exports = {
  useLogger: getMorganModeWithCheck,
  getMongoUrl: getMongoURLFromConfig,
  startServer: getServerRunMode,
  shouldErrorLog: getErrorLoggingSetting
}
