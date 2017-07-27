const ColorThief = require('color-thief');
const glob = require('glob');
const path = require('path');
const rgbToHex = require('rgb-hex');
const colorThief = new ColorThief();

const sources = glob.sync(path.join(__dirname, '../data/palettes/*.png'));
const PATTERN_NUM = 2;

const rgbArrToHex = arr => {
  const hex = rgbToHex(`rgb(${arr.join(', ')})`);
  return `#${hex}`;
};

const palettes = sources.map(source => {
  console.log(`Processing: ${source}`);
  const pattern = colorThief.getPalette(source, PATTERN_NUM);
  const dominant = pattern[0];
  const subDominant = pattern[1];
  return {color: rgbArrToHex(subDominant), bgcolor: rgbArrToHex(dominant)};
});

console.log(palettes);
