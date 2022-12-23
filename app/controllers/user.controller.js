exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send(true);
};

exports.adminBoard = (req, res) => {
  res.status(200).send(true);
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send(true);
};