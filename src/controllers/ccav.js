const { ccavServices } = require("../services");

module.exports = {
ccavRequestHandler: async (req, res) => {
    await ccavServices.ccavRequestHandler(req, res);
  }
}