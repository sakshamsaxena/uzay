/**
 *
 */

module.exports = {
  handleErrors: function (error, res) {
    res.status(404).send({
      Message: error,
      DocsURL: 'DocsURL'
    })
  }
}
