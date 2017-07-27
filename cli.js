const JPIconGenerator = require('./lib/jpicon-generator.js');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const mkdirp = require('mkdirp');

const parseArgs = () => {
  const argv = minimist(process.argv.slice(2));
  return {
    output: argv.output || path.join(process.cwd(), `./output/icon.png`),
    help: argv.h || argv.help,
    jpicon: {
      size: argv.size || 64,
      seed: argv.seed || parseInt(Math.random() * 10000)
    }
  };
};

const options = parseArgs();

if (options.help) {
  console.info('Usage: jpicon [--size] [--seed] [--output]');
  console.info('--size: size of icon. (default: 64)');
  console.info('--seed: seed of random numbers to generate icon. (default: random number)');
  console.info('--output: file path to output. (default: ./output.png)');
  process.exit(0);
}

({icon, params} = JPIconGenerator.generate(options.jpicon));
mkdirp(path.dirname(options.output));
fs.writeFileSync(options.output, icon)
console.info(params);
console.info(`file is successfully generated. (${options.output})`);
