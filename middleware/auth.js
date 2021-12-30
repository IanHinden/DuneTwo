module.exports = (req, res, next) => {
  try {
    if (req.user) {
      next();
    } else {
        res.status(401).json({'error': 'No user'});
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};