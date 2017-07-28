const Kaleidoscope = require('./kaleidoscope.js');
const ParameterGenerator = require('./parameter-generator.js');
const path = require('path');

module.exports = class JPIconGenerator {
  static generate(defaults = {}) {
    const paramGenerator = new ParameterGenerator(defaults.seed);
    const params = paramGenerator.generate(defaults);
    params.format = path.extname(params.source).replace('.', '');
    params.shape = defaults.shape;

    const kaleidoscope = new Kaleidoscope(params.image, defaults.size, params);
    const icon = kaleidoscope.generate();

    return {
      params: Object.assign({}, defaults, params),
      icon
    };
  }
};
