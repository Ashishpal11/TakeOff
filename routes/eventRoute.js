const express = require("express");
const router = express.Router();
const { getAll, createEvent } = require("../controller/event");

// @route GET /events/get
// @description get all events
// @access Public
router.get("/get", getAll);
router.post("/create",createEvent);
module.exports = router;
