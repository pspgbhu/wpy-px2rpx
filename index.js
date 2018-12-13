const path = require('path')
const fs = require('fs-extra')
const Convert = require('./convert')

module.exports = function px2rpx(filename, opts = {}) {
  const absolutePath = path.isAbsolute(filename) ? filename : path.join(path.resolve(), filename)
  const newContent = new Convert(absolutePath).px2rpx(2)

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`The target file not existed! ${absolutePath}`)
  }

  generate(absolutePath, newContent, opts)
}

function generate(file, content, opts = {}) {
  const { cover = false } = opts

  const dir = path.dirname(file)
  const basename = path.basename(file, '.wpy')
  const newfile = cover ? file : path.join(dir, `${basename}.rpx.wpy`)

  if (fs.existsSync(newfile) && !cover) {
    throw new Error(`Generate converted file error. because the file ${newfile} has existed!`)
  } else {
    fs.writeFileSync(newfile, content, { encoding: 'utf-8' })
  }
}