const loadImage = require('./load-image.js');
const path = require('path');
const glob = require('glob');
const palettes = require('./palettes.js');
const MersenneTwister = require('mersenne-twister');

module.exports = class ParameterGenerator {
  constructor(seed) {
    this._seed = seed;
    this._generator = new MersenneTwister();
  }

  generate(defaults = {}) {
    this._generator.init_seed(this._seed);
    const sources = this._getSources();
    const sourceIdx = this._random(0, sources.length - 1);
    const source = defaults.source || sources[sourceIdx];
    const image = loadImage(source);
    const offsetX = defaults.offsetX || this._random(0, image.width / 4);
    const offsetY = defaults.offsetY || this._random(0, image.height / 4);
    const offsetRotation = defaults.offsetRotation || this._random(0, Math.PI * 2);
    const offsetScale = defaults.offsetScale || this._random(0.8, 1.3);
    const palette = defaults.palette || palettes[this._random(0, palettes.length)];

    return {
      source,
      image,
      offsetX,
      offsetY,
      offsetRotation,
      offsetScale,
      palette
    };
  }

  _random(min, max) {
    const diff = max - min;
    const num = min + diff * this._generator.random_incl();
    return parseInt(num);
  }

  _getSources() {
    return glob.sync(path.join(__dirname, '../data/images/*.png'));
  }
};
