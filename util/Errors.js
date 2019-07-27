/*
  Class of Error Wrapper Functions
*/
const util = require('./Util')

function sendErrorResponse (error, res, m) {
  if (m && m.connection.readyState !== 0) {
    m.connection.close()
  }
  if (util.shouldErrorLog(process.env.NODE_ENV)) {
    // Do something more than console error
    console.error(error)
  }
  res.status(404).send({
    Message: error.message ? error.message : error,
    DocsURL: 'https://sakshamsaxena.github.io/uzay'
  })
}

module.exports = {
  handleRouteErrors: sendErrorResponse
}
