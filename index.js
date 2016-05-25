const crypto = require('crypto')

// Each Node has a random 160bit ID
function Node () {
  this.nodeID = ''
  this.idLength = 20
}

Node.prototype.generateRandomID = function () {
  // or use the crypto module
  let id = crypto.randomBytes(this.idLength)
  let idString = Buffer.from(id)
  this.nodeID = idString.toString('hex')
  return this.nodeID
}

module.exports = Node
