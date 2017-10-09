const path = require('path')

module.exports = function Swiper (moduleOptions) {
  // Register `swiper.js` template
  this.addPlugin(path.resolve(__dirname, 'plugins/swiper.js'))
}