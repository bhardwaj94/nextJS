const list = require('./list');

module.exports = (fileArray, targetPath, callback) => {
  const targetFileArray = list(targetPath);

  for (const i in fileArray) {
    if (targetFileArray.includes(fileArray[i])) {
      return callback(true);
    }
  }

  return callback(false);
};