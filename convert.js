const fs = require('fs-extra')
const path = require('path')
const debug = require('debug')('px2rpx')

module.exports = class Convert {
  constructor(filename) {
    this.filename = filename

    debug('[Convert.constructor] filename: ', filename)

    if (!path.isAbsolute(filename)) {
      throw new Error(`Parameter Error! Expect an absolute path as the parameter`)
    }
    this.content = this._getContent()
  }

  /**
   * @private
   */
  _getContent() {
    return fs.readFileSync(this.filename, { encoding: 'utf-8' })
  }

  /**
   * @public
   * @param {number} rate - 转换倍数
   * @return {string} - 转换后的文件内容
   */
  px2rpx(rate = 1) {
    debug('[Convert.px2rpx] rate: ', rate)

    const reg = /<style.*?>((.|\f|\r|\n)*?)<\/style>/igm
    return this.content.replace(reg, (style) => {
      return style.replace(/((\d|\.)+)px/igm, (...args) => {
        const [, number] = args
        return number * rate + 'rpx'
      })
    })
  }
}