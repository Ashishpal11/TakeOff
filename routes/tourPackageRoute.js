const express = require("express");
const router = express.Router();
const { getAll, createTourDetails } = require("../controller/tourPackage");

// @route GET /tours/get
// @description get all tour packages
// @access Public
router.get("/get", getAll);
router.post("/create",createTourDetails);

module.exports = router;
