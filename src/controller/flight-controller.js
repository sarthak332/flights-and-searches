const {FlightService} = require("../services/index");
const flightService = new FlightService; 
const create = async(data)=>{
   try {
    const response = await flightService.create(data);
    response.status(201).json({
      data: response,
      success: true,
      message: "flight is saved in database",
      err: {},
    })
   } catch (error) {
    return res.status(500).json({
        data: {},
        success: false,
        message: "Something Wrong in data",
        err: error,
      });
   }
}

module.exports = {
    create
}