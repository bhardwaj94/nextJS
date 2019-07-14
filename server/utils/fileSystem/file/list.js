const fs = require('fs');

module.exports = dirName => {
  const fileArray = [];

  fs.readdirSync(dirName).forEach(file => {
    if (!(fs.statSync(`${dirName}/${file}`).isDirectory())) {
      fileArray.push(file);
    }
  });

  return fileArray;
};
