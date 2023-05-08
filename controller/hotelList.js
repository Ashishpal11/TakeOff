const Hotels=require('../models/hotelList')


module.exports.getAll = (req, res) => {
    Hotels.find().then((hotels) => res.json(hotels));
};
module.exports.createHotel=(req,res)=>{
	Hotels
    .create(req.body)
    .then((info) => res.json(info))
    .catch((err) => res.json(err));

}