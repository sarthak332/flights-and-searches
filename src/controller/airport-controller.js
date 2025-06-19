const {AirportService} = require("../services/index");

const airportService = new AirportService();

//  POST /create
const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    res.status(201).json({
      data: response,
      success: true,
      message: "Airport is saved on database",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a Airport",
      err: error,
    });
  }

};
const destroy = async (req, res) => {
    try {
      const response = await airportService.destroy(req.params.id);
      res.status(200).json({
        data: response,
        success: true,
        message: "Airport is Deleted Successfully",
        err: {},
      });
    } catch (error) {
      res.status(500).json({
        data: {},
        success: false,
        message: "not able to delete a Airport",
        err: error,
      });
    }
};

const update =async(req, res)=>{
    try {
        const response = await airportService.update(req.params.id, req.body);
        res.status(200).json({
          data: response,
          success: true,
          message: "Airport is Updated Successfully",
          err: {},
        });
        }catch (error) {
        res.status(500).json({
          data: {},
          success: false,
          message: "not able to update a Airport",
          err: error,
        });
      }
};
const get =async(req, res)=>{
    try {
        const response = await airportService.get(req.params.id);
        res.status(200).json({
          data: response,
          success: true,
          message: "Airport data retrieved successfully",
          err: {},
        });
      } catch (error) {
        res.status(500).json({
          data: {},
          success: false,
          message: "not able to get a Airport data",
          err: error,
        });
      }
};
module.exports = {
    create,
    destroy,
    update,
    get
}