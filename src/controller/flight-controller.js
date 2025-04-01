const { FlightService } = require("../services/index");
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const response = await flightService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Flight is saved in database",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something Wrong in data",
      err: error,
    });
  }
};

const getFlight = async (req, res) => {
  try {
    console.log(req.query)
    const response = await flightService.getFlight(req.query);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Flight is fetched!!",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something Wrong in filters data",
      err: error,
    });
  }
};

module.exports = {
  create,
  getFlight
};
