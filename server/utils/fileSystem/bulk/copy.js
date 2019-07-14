const fs = require('fs');

module.exports = (names, src, dest, callback = () => { }) => {
  let count = names.length;

  if (count === 0) {
    return callback();
  }

  names.forEach(x => {
    fs.copyFile(src + '/' + x, dest + '/' + x, () => {
      count--;

      if (count === 0) {
        return callback();
      }
    });
  });
};