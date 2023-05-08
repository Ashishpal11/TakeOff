/**
 * @author ${Bhavesh Lalwani}
 */

const FlightList = require("../models/flightList");


// Get available list of flights
module.exports.getFlights = (req, res) => {
	FlightList.find().then((flights) => res.json(flights));
};

//Create flight details
module.exports.flightDetails=(req,res)=>{
	FlightList
    .create(req.body)
    .then((info) => res.json(info))
    .catch((err) => res.json(err));

}