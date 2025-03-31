const {AirportRepository} = require("../repository/index");

class AirportService {
  constructor() {
    this.AirportRepository = new AirportRepository();
  }
  async createAirport(data) {
    try {
      const airportData = await this.AirportRepository.createAirport(data);
      return airportData;
    } catch (error) {
      throw { error };
    }
  }
  async deleteAirport(airportId) {
    try {
      const response = await this.AirportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async getData(airportId) {
    try {
      const airport = await this.AirportRepository.getData(airportId);
      return airport;
    } catch (error) {
      throw { error };
    }
  }
  async updateAirport(airportId, data){
    try {
        const response = await this.AirportRepository.updateAirport(airportId,data);
        return response;
      } catch (error) {
        throw { error };
      }
  }
}

module.exports = AirportService;