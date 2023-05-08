const Events = require("../models/eventModel");

module.exports.getAll = (req, res) => {
	Events.find().then((events) => res.json(events));
};

//create evets
module.exports.createEvent=(req,res)=>{
	Events
    .create(req.body)
    .then((info) => res.json(info))
    .catch((err) => res.status(400).json({ error: err }));
}