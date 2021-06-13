// [GET] ../dev/version
exports.getVersion = (req, res, next) => {
  return res.status(200).json({ message: 'Server is up and running 🔥' });
};
