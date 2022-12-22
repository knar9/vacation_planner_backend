const db = require("../models");
const Vacationrequest = db.vacationrequest;

exports.requests = (req, res) => {
    console.log("received something")
    const vacationrequest = new Vacationrequest ({
        username: req.body.username,
        startdate: req.body.sDate,
        enddate: req.body.eDate,
        status: 'eingegangen'
    })
    vacationrequest.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.status(200).send({ message: "Anfrage wurde verschickt!" });
        });
};

exports.userRequests = async (req, res) => {
  console.log("received something")
    const userRequest = await Vacationrequest.find({ username : req.body.username }).exec();
    res.status(200).json(userRequest);
}

exports.allRequests = async (req, res) => {
  console.log("received something")
    const allRequest = await Vacationrequest.find({ status: 'eingegangen' }).exec();
    res.status(200).json(allRequest);
}