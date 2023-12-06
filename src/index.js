'use strict'

const acorn = require('acorn')
const acornWalk = require('acorn-walk')
const MagicString = require('magic-string')

module.exports = function (source) {
  const ast = acorn.parse(source)
  const code = new MagicString(source)
  acornWalk.simple(ast, {
    CallExpression(node) {
      if (
        node.callee.type === 'MemberExpression' &&
        node.callee.object.name === 'console'
      ) {
        code.overwrite(node.start, node.end, '')
      }
    },
  })

  return code.toString()
}
