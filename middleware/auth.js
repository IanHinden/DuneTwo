module.exports = (req, res, next) => {
  try {
    if (req.user) {
      next();
    } else {
        res.send(401, 'no user');
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};