const express = require('express');
const compression = require('compression');
const next = require('next');
const uuid = require('uuid/v4');
const authorize = require('./authorize');
const databaseConnect = require('./database');
const helmet = require('helmet');
const api = require('./api');
const fileUpload = require('express-fileupload');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8020;

// eslint-disable-next-line no-unused-vars
const ROOT_URL = dev ? `http://localhost:${port}` : `http://localhost:${port}`;

databaseConnect();

const app = next({ dev });

const routes = require('../client/lib/routes');
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  const attachUsername = (req, res, next) => {
    /* spell-checker: disable */
    req.user = {
      name: 'MyProject',
      email: 'bhardwaj.info2cs@gmail.com'
    };
    /* spell-checker: enable */
    next();
  };

  server.use(helmet());
  server.use(compression());
  server.use(express.json({ limit: '50mb' }));
  server.use(fileUpload());

  //potential fix for Error: Can't set headers
  //try reproducing with Chrome Dev Tools open

  if (!dev) {
    server.use(compression());
  }

  // give all NextJs requests to NextJs server

  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  if (!dev) {
    server.set('trust proxy', 1); // trust first proxy
  }

  server.use((req, res, next) => {
    if (req.originalUrl && req.originalUrl.startsWith('/api/')) {
      req.requestTime = new Date();
      req.uuid = uuid();
    }

    const send = res.send;

    res.send = function (body) {
      res.send = send;
      res.send(body);

      res.responseTime = new Date();
    };

    next();
  });

  api.routes.forEach(x => {
    server.use(x.route, attachUsername, authorize, x.controller);
  });

  server.get('*', handle);

  const appServer = server.listen(port, err => {
    if (err) {
      throw err;
    }
  });
});

// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (error, p) => {
  // eslint-disable-next-line no-console
  console.error(error.stack);
});

process.on('uncaughtException', error => {
  // eslint-disable-next-line no-console
  console.error(error.stack);
});