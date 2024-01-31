const { emailServices } = require("../services");

module.exports = {
sendPaymentConfirmation: async (req, res) => {
    await emailServices.sendPaymentConfirmation(req, res);
  }
}