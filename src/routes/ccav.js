const CcavController = require("../controllers/ccav")
const express = require("express");
const router = express.Router();

router.post("/ccavRequestHandler", (req, res) => CcavController.ccavRequestHandler(req, res));

module.exports = router