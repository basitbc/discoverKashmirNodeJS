const express = require("express");
const router = express.Router();
const ccav = require("./ccav")
const email= require("./email")



router.use("/api/ccav", ccav);
router.use("/api/email", email);



module.exports = router
