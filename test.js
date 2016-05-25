const test = require('tape')
const DHT = require('./index.js')

// example test
test('two nodes should have unique ids', (t) => {
  // state how many tests to run
  t.plan(1)
  let node1 = new DHT()
  let node2 = new DHT()
  let node1ID = node1.generateRandomID()
  let node2ID = node2.generateRandomID()
  t.notEqual(node1ID, node2ID)
})
