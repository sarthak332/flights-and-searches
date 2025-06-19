const { CityServices } = require("../services/index");
const cityServices = new CityServices();
const {SuccessCodes} = require("../utils/error-code");
// POST ->/create
const create = async (req, res) => {
  try {
    const city = await cityServices.createCity(req.body);
    res.status(SuccessCodes.CREATED).json({
      data: city,
      success: true,
      message: "city is saved on database",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a city",
      err: error,
    });
  }
};
// post : create/bulk
const createInOneGo = async(req, res) => {
  try{
  const { airport } = req.body;
  const  bulkCity = await cityServices.bulkCreation(airport);
  res.status(SuccessCodes.CREATED).json({
    data: bulkCity,
    success: true,
    message: "city is saved on database",
    err: {},
  })
  }catch(error){
    res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a city",
      err: error,
    })
  }
};
//DELETE.-> /city/:userId
const destroy = async (req, res) => {
  try {
    const response = await cityServices.destroy(req.params.id);
    res.status(SuccessCodes.OK).json({
      data: response,
      status: true,
      message: "deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to delete the city",
      err: error,
    });
  }
};

const updateCity = async (req, res) => {
  try {
    console.log(req.body);
    const response = await cityServices.updateCity(req.params.id, req.body);
    console.log("this is not  undefined", response);
    res.status(201).json({
      status: true,
      message: "Updated Successfully",
      data: response,
    });
  } catch (error) {
    console.log("city data is invalid");
    return res.status(500).json({
      data: {},
      success: false,
      message: "not be able to",
      err: error,
    });
  }
};
const getCity = async (req, res) => {
  try {
    const city = await cityServices.getCity(req.params.id);
    res.status(201).json({
      status: true,
      message: "Updated Successfully",
      data: city,
    });
  } catch (error) {
    console.log("Updateding is UnSuccessfully");
    throw error;
  }
};
const getingAll = async (req, res) => {
  try {
    const cities = await cityServices.getAllCities(); // Fixed Wholeget() → cityServices.getAllCities()
    res.status(200).json({
      status: true,
      message: "Complete data retrieved",
      data: cities,
    });
  } catch (error) {
    console.error("Error fetching all cities:");
    res.status(500).json({
      status: false,
      message: "Fetch failed",
      err: error,
    });
  }
};
module.exports = {
  create,
  createInOneGo,
  updateCity,
  destroy,
  getingAll,
  getCity,
};
