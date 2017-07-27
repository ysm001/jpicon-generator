const JPICON = require('../index.js');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const COUNT = 300;
const SIZE = 64;
const EXAMPLES_DIR = path.join(__dirname, '../examples');
const IMAGES_DIR = path.join(EXAMPLES_DIR, './images');
mkdirp.sync(IMAGES_DIR);

const imgTags = [...Array(COUNT).keys()].map(i => {
  console.info(`Generating: ${i + 1}/${COUNT}`);
  const options = {size: SIZE, seed: i};
  const icon = JPICON.generate(options);
  const name = `seed-${icon.params.seed}.${icon.params.format}`;
  fs.writeFileSync(path.join(IMAGES_DIR, name), icon.icon);
  return `<img src="./images/${name}" alt="${name}"></img>`;
});

const html = `
<html>
  <head><title>JPICON Examples</title></head>
  <body>
    ${imgTags.join('\n')}
  </body>
</html>
`;

fs.writeFileSync(path.join(EXAMPLES_DIR, './index.html'), html);
