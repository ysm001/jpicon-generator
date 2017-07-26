const Kaleidoscope = require('./lib/kaleidoscope.js');
const ParameterGenerator = require('./lib/parameter-generator.js');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const mkdirp = require('mkdirp');

const parseArgs = () => {
  const argv = minimist(process.argv.slice(2));
  const options = {
    size: argv.size || 64,
    seed: argv.seed || parseInt(Math.random() * 10000),
    output: argv.output || path.join(process.cwd(), `./output.png`),
    help: argv.h || argv.help
  };

  return Object.assign({}, options, {
    format: path.extname(options.output).replace('.', '')
  });
};

const options = parseArgs();

if (options.help) {
  console.info('Usage: jpicon [--size] [--seed] [--output]');
  console.info('--size: size of icon. (default: 64)');
  console.info('--seed: seed of random numbers to generate icon. (default: random number)');
  console.info('--output: file path to output. (default: ./output.png)');
  process.exit(0);
}

const paramGenerator = new ParameterGenerator(options.seed);
const params = paramGenerator.generate();
const size = options.size;

const kaleidoscopeOptions = Object.assign({}, params, {format: options.format});
console.info(kaleidoscopeOptions);
const kaleidoscope = new Kaleidoscope(params.image, size, kaleidoscopeOptions);
const icon = kaleidoscope.generate();
mkdirp(path.dirname(options.output));
fs.writeFileSync(options.output, icon)
console.info(`file is successfully generated. (${options.output})`);
