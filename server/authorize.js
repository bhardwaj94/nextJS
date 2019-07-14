const permissions = require('./permissions.json');

function verifyRoles(path, roles, method) {
  const results = permissions.routes[path][method].filter(value => roles.indexOf(value) !== -1);

  if (results.length !== 0) {
    return 1;
  }

  return 0;
}

const authorizeUser = (req, res, next) => {
  const method = req.method;

  const { projectId } = method === 'GET' ? req.query : req.body;

  let completeUrl = req.baseUrl + req.path;

  let authFlag;

  if (projectId) {
    const { roles } = req.rawAccessToken.resource_access[projectId];

    completeUrl = completeUrl.endsWith('/') ? completeUrl : completeUrl + '/';

    authFlag = verifyRoles(completeUrl, roles, method);
  }

  if (authFlag === 1 || projectId === undefined) {
    next();
  }
  else {
    res.status(401).json({
      err: {
        errorCode: 'UNAUTHORIZED',
        errorDetails: 'Unauthorized'
      }
    });
  }
};

module.exports = authorizeUser;