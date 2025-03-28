const {CityServices}  = require("../services/index");
const cityServices = new CityServices;

// /city/create
const create = async(req, res) => {
  try {
    const cityData = req.body;
    const city = await cityServices.createCity(cityData);
    res.status(201).json({
      status: true,
      message: "city is saved on database",
      data: city,
    });
  } catch (error) {
    console.log("city data is invalid");
    throw error;
  }
}
  // /city/:userId
  const deleting = async (req, res) => {
    try {
      const deletingResposnse = await cityServices.deleteCity(req.params.id);
      res.status(200).json({
        status: true,
        message: "deleted Successfully"
      });
    } catch (error) {
      console.log("city data is invalid");
      throw error;
    }
  };

  const updateCity = async (req, res) => {
    try {
      const updatedCity = await cityServices.updateCity(req.body);
      res.status(201).json({
        status: true,
        message: "Updated Successfully",
        data: updateCity,
      });
    } catch (error) {
      console.log("city data is invalid");
      throw error;
    }
  }
  const getCity =async(req, res)=>{
    try{
       const city = await cityServices.getCity(req.body);
       res.status(201).json({
        status: true,
        message: "Updated Successfully",
        data: city,
      });
    }catch(error){
        console.log("Updateding is UnSuccessfully");
        throw error;
    }
}
    const getingAll = async (req, res) => {
        try {
          const data = await cityServices.getAllCities(); // Fixed Wholeget() → cityServices.getAllCities()
          console.log(data)
          res.status(200).json({
            status: true,
            message: "Complete data retrieved",
            data: data,
          });
        } catch (error) {
          console.error("Error fetching all cities:", error);
          res.status(500).json({ status: false, message: "Fetch failed" });
        }
    }
module.exports = {
    create,
    updateCity,
    deleting,
    getingAll,
    getCity,
};
