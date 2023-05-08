const express = require("express");
const router = express.Router();

const {
  addOffer,
  getOffers,
  getMainOffer,
  getPromoValidation,
} = require("../controller/offers");

// to get all the available offers
router.get("/getoffers", getOffers);

router.post("/add",addOffer);
// to get the biggest offer going on
router.get("/mainoffer", getMainOffer);

// to check for promocode validation
router.post("/validoffer", getPromoValidation);

module.exports = router;
