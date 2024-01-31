
  const emailController = require("../controllers/email")
const express = require("express");
const router = express.Router();

router.post("/sendmail", (req, res) => emailController.sendPaymentConfirmation(req, res));

module.exports = router