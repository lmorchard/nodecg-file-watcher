const path = require('path');
const watch = require('watch');

const bundlesPath = path.dirname(__dirname);

module.exports = function (nodecg) {
  watch.watchTree(bundlesPath, { interval: 1.0 }, (file, curr, prev) => {
    if (typeof file === 'object') return;
    // HACK: could try loading up bundle package.json, but let's just do this for now
    const bundleName = file
      .substring(bundlesPath.length + 1)
      .split(path.sep)[0];
    nodecg.sendMessage('bundleFileChanged', { file, bundleName });
  });
};
