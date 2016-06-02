function Table () {
  this.nodes = []
}

Table.prototype.decodeNodeID = function (node) {
  const idString = new Buffer(node.nodeId).toString('hex')
  return idString
}

module.exports = Table

