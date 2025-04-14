const { FlightService } = require("../services/index");
const {SuccessCodes} = require("../utils/error-code");
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const response = await flightService.create(req.body, req.headers);
    return res.status(SuccessCodes.CREATED).json({
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
      err: error.message,
    });
  }
};

const getAllFlight = async (req, res) => {
  try {
    console.log(req.query);
    const response = await flightService.getAllFlight(req.query);
    return res.status(SuccessCodes.OK).json({
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

const getflight = async(req, res)=>{
  try {
    const response = await flightService.getflight(req.params.id);
    return res.status(SuccessCodes.OK).json({
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
}

const update = async(req, res)=>{
   try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
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
}

module.exports = {
  create,
  getAllFlight,
  getflight,
  update
};
