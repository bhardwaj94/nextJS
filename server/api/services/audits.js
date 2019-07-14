const auditModel = require('../../models/Audit');

const addRemark = data => {
  let remark = '';

  if (data._id) {
    remark += data._id;
  }
  else if (data._ids) {
    data._ids.map(item => {
      remark += item + ' ; ';
    });
  }
  else if (Array.isArray(data)) {
    data.map(item => {
      if (item._id) {
        remark += item._id + ' ; ';
      }
    });
  }
  else {
    remark += JSON.stringify(data);
  }

  return remark;
};

const createAudit = (req, resBody) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseBody = {};

      if (resBody) {
        responseBody = JSON.parse(JSON.stringify(resBody));
      }

      const auditObj = {
        method: req.baseUrl + ' ' + req.method,
        parameter: req.body,
        dateTime: new Date().toUTCString(),
        userId: (req.user && req.user.name) ? req.user.name : 'admin'
      };

      if (req.method === 'GET') {
        auditObj.parameter = req.query;
        auditObj.remark = auditObj.userId + ' fetched ' + addRemark(responseBody);
      }

      if (req.method === 'PUT') {
        auditObj.remark = auditObj.userId + ' updated ' + addRemark(responseBody);
      }

      if (req.method === 'DELETE') {
        auditObj.remark = auditObj.userId + ' deleted ' + addRemark(auditObj.parameter);
      }

      if (req.method === 'POST') {
        auditObj.target = [];
        auditObj.remark = auditObj.userId + ' created ';

        if (responseBody._id) {
          auditObj.target.push(responseBody._id);
          auditObj.remark += responseBody._id;
        }
        else if (Array.isArray(responseBody)) {
          responseBody.map(item => {
            if (item._id) {
              auditObj.target.push(item._id);
              auditObj.remark += item._id + ' ; ';
            }
          });
        }
      }

      const auditData = await auditModel.insertData(auditObj);

      return resolve(auditData);
    } catch (err) {
      return reject({
        errorCode: 'UNKNOWN_ERROR',
        errorDetails: err.toString()
      });
    }
  });
};

module.exports = {
  createAudit
};