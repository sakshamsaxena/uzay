/*
  Class of Error Wrapper Functions
*/

module.exports = {
  handleRouteErrors: function (error, res) {
    if (process.env.NODE_ENV === 'DEBUG') {
      console.error(error)
    }
    res.status(404).send({
      Message: error,
      DocsURL: 'https://sakshamsaxena.github.io/uzay'
    })
  }
}
