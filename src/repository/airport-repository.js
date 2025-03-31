const { Airport } = require("../models/index");

class AirportRepository {

  async createAirport(data) {
    try {
      const airport = await Airport.create(data);
      return airport;
    } catch (error) {
      console.error("Something went wrong in the repository");
      throw { error };
    }
  }
  async deleteAirport(airportId) {
    try {
      const response = await Airport.destroy({
        where: { id: airportId },
      });
      return response;
    } catch (error) {
      console.error("Something went wrong in the repository");
      throw { error };
    }
  }
  async getData(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.error("Something went wrong in the repository");
      throw { error };
    }
  }
  async updateAirport(airportId, data){
    try{
    const airport = await Airport.findByPk(airportId);
     
     if (!airport) {
        console.error("Airport not found");
        return null;
      }  
    airport.name = data.name;
    await airport.save();
    return airport;
    }
    catch (error) {
        console.error("Something went wrong in the repository");
        throw { error };
      }
  }
  async getAllAirport(){
    try{
    const airports = await Airport.findAll();
    return airports
    }
    catch (error) {
        console.error("Something went wrong in the repository");
        throw { error };
      }
  }
  
}
module.exports = AirportRepository;
