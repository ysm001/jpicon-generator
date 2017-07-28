const JPIconGenerator = require('./lib/jpicon-generator.js');
const Palettes = require('./lib/palettes.js');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const mkdirp = require('mkdirp');

const parseArgs = () => {
  const argv = minimist(process.argv.slice(2));
  return {
    output: argv.output || path.join(process.cwd(), './output/icon.png'),
    help: argv.h || argv.help,
    jpicon: {
      size: argv.size || 64,
      seed: argv.seed || parseInt(Math.random() * 10000),
      sliceNum: argv['slice-num'],
      offsetRotation: argv['offset-rotation'],
      offsetScale: argv['offset-scale'],
      offsetX: argv['offset-x'],
      offsetY: argv['offset-y'],
      shape: argv.shape || 'circle',
      palette: argv.palette ? Palettes.find(argv.palette) : null
    }
  };
};

const options = parseArgs();

if (options.help) {
  console.info('Usage: jpicon [options]');
  console.info('');
  console.info('Options:');
  console.info('  --size:              size of icon. (default: 64)');
  console.info('  --seed:              seed of random numbers to generate icon. (default: random value)');
  console.info('  --slice-num:         slice number of circle. (default: 12)');
  console.info('  --offset-rotation:   offset of icon\'s rotation. (default: random value)');
  console.info('  --offset-scale:      offset of icon\'s scale. (default: random value)');
  console.info('  --offset-x:          offset of icon\'s x position. (default: random value)');
  console.info('  --offset-y:          offset of icon\'s y position. (default: random value)');
  console.info('  --shape:             shape of icon (square | circle) (default: circle)');
  console.info('  --palette:           palette name (default: random value)');
  console.info('  --output:            file path to output. (default: ./output.png)');
  process.exit(0);
}

const ret = JPIconGenerator.generate(options.jpicon);
const icon = ret.icon;
const params = ret.params;

mkdirp(path.dirname(options.output));
fs.writeFileSync(options.output, icon);
console.info(params);
console.info(`file is successfully generated. (${options.output})`);
