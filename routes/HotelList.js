const express = require("express");
const { createHotel } = require("../controller/hotelList");
const { getAll } = require("../controller/hotelList");
const router = express.Router();

router.get('/get',getAll)
router.post('/create',createHotel)

module.exports=router