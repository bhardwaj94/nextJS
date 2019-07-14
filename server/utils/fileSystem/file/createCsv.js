const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = (headers, records, filePath) => {
  return new Promise((resolve, reject) => {
    const csvWriter = createCsvWriter({
      path: filePath,
      header: headers
    });

    csvWriter.writeRecords(records).then(() => {
      resolve(true);
    }).catch(err => {
      return reject({
        errorCode: 'UNKNOWN_ERROR',
        errorDetails: err.toString()
      });
    });
  });
};