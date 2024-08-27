module.exports = class Elecorat {
  size = 1000
  radius = 1
  width = 300
  height = 200
  data() {
    return { permalink: '/electorat.svg' }
  }
  render(data) {
    return `
      <svg height="${this.height*2}" width="${this.width*2}" viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">
        <rect fill="transparent" x="0" y="0" width="${this.width}" height="${this.height}"/>
        ${this.circles(this.size)}
      </svg>
    `
  }

  circles(n=10) {
    const result = []
    for (let i=0; i<n; ++i) {
      result.push(this.circle())
    }
    return result.join('\n')
  }

  circle() {
    const x = this.radius + Math.floor(this.random() * (this.width - (this.radius*2)))
    const y = this.radius + Math.floor(this.random() * (this.height - (this.radius*2)))
    return `<circle fill="currentColor" cx="${x}" cy="${y}" r="${this.radius}"/>`
  }

  random() {
    let res = 10
    while(res >= 1) {
      res = (this.gaussian(-2, 2) + 1) / 2;
    }
    return res
  }

  // https://stackoverflow.com/a/49434653
  // Standard Normal variate using Box-Muller transform.
  gaussian(min=0, max=1, skew=1) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random()
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )

    num = num / 10.0 + 0.5 // Translate to 0 -> 1
    if (num > 1 || num < 0)
      num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range

    else{
      num = Math.pow(num, skew) // Skew
      num *= max - min // Stretch to fill range
      num += min // offset to min
    }
    return num
  }
}
