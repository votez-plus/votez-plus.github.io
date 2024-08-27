const webcPlugin = require('@11ty/eleventy-plugin-webc')
module.exports = function (config) {
  config.addPlugin(webcPlugin, {
    useTransform: true
  })

  config.addPassthroughCopy('css/*.css')
  config.addPassthroughCopy('images/*.svg')
  config.addPassthroughCopy('images/*.png')
  config.addPassthroughCopy('images/*.jpg')
}
