const fs = require('fs');
const path = require('path');

const list = (dir, callback) => {
  const results = {};
  const files = [];

  fs.readdir(dir, (err, dirList) => {
    if (err) {
      return callback(err);
    }

    let pending = dirList.length;

    if (!pending) {
      return callback(null, {});
    }

    dirList.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          list(file, (err, res) => {
            results[path.basename(file)] = res;

            if (!--pending) {
              callback(null, results);
            }
          });
        } else {
          files.push({
            name: path.basename(file),
            path: file
          });

          if (!--pending) {
            callback(null, results);
          }
        }
      });
    });
  });
};

module.exports = list;