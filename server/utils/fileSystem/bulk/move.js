const fs = require('fs');

module.exports = (names, src, dest, callback = () => { }) => {
  let error = '';

  let count = names.length;

  if (count === 0) {
    return callback();
  }

  names.forEach(x => {
    fs.rename(src + '/' + x, dest + '/' + x, err => {
      if (err) {
        error = err.toString();
      }

      count--;

      if (count === 0) {
        if (error !== '') {
          return callback(error);
        }

        return callback();
      }
    });
  });
};