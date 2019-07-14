const express = require('express');
const router = express.Router();
const sysContextService = require('../services/sysContext');

router.get('/', (req, res) => {
  sysContextService.getSysContext(req).then(sysContextData => {
    res.send(sysContextData);
  });
});

module.exports = router;