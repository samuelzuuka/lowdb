const fs = require('fs')
const path = require('path')
const test = require('tape')
const tempfile = require('tempfile')
const defaults = require('lodash/fp/defaults')
const get = require('lodash/fp/get')
const concat = require('lodash/fp/concat')
const set = require('lodash/fp/set')
const low = require('../src/fp')

test('fp', (t) => {
  const filename = tempfile()
  const db = low(filename)

  const posts = db('posts', [])

  posts(concat(1))

  t.same(posts(), [ 1 ])
  t.same(db.getState(), { posts: [ 1 ] })

  // const actual = JSON.parse(fs.readFileSync(filename))
  // t.same(actual, { foo: [1] })
  t.end()
})