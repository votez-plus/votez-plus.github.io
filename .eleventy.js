module.exports = function (config) {
  config.addPassthroughCopy('css/*.css')
  config.addPassthroughCopy('images/*.svg')
  config.addPassthroughCopy('images/*.png')
  config.addPassthroughCopy('images/*.jpg')
}
