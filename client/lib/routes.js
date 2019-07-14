const routes = module.exports = require('next-routes')();

routes
  .add({ name: 'default', pattern: '/', page: 'home' })
  .add({ name: 'home', pattern: '/home', page: 'home' })
  .add({ name: 'about', pattern: '/about', page: 'about' })
  .add({ name: 'logout', pattern: '/logout' });