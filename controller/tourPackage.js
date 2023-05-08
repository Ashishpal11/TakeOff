const TourPackages = require("../models/tourPackageModel");

module.exports.getAll = (req, res) => {
	TourPackages.find().then((tour) => res.json(tour));
};
//create tour deatails
module.exports.createTourDetails=(req,res)=>{
	TourPackages.create(req.body)
    .then((info) => res.json(info))
    .catch((err) => res.json(err));
}