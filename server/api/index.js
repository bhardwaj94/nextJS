const sysContextApi = require('./controllers/sysContext');

module.exports = {
  routes: [
    {
      route: '/api/sysContext',
      controller: sysContextApi
    }
  ],
  unprotected: []
};