const mongoose = require("mongoose");

const Vacationrequest = mongoose.model(
  "Vacationrequests",
  new mongoose.Schema({
    username: String,
    startdate: String,
    enddate: String,
    status: String
  }), 'vacationrequests'
);

module.exports = Vacationrequest;