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