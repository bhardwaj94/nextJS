const getSysContext = req => {
  return new Promise(async resolve => {
    const sysContext = {
      user: {
        name: req.user.name
      }
    };
    return resolve(sysContext);
  });
};

module.exports = {
  getSysContext
};