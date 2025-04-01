const {
  Flightrepository,
  AiroplaneRepository,
} = require("../repository/index");

class FlightService {
  constructor() {
    this.airoplaneRepository = new AiroplaneRepository();
    this.flightRepository = new Flightrepository();
  }
  async create(data) {
    try {
      const Airplanedata = await this.airoplaneRepository.getAirplane(
        data.airplaneId
      );
      const response = await this.flightRepository.create({
        ...data,
        totalSeats: Airplanedata.capacity,
      });

      return response;
    } catch (error) {
      console.log("Something Went Wrong Overhere!!!!!", error);
      throw error;
    }
  }

  async getFlight(filter) {
    try {
      const response = await  this.flightRepository.getFlight(filter);
      return response;
    } catch (error) {
      console.log("Something Went Wrong Overhere!!!!!", error);
      throw error;
    }
  }
}

module.exports = FlightService;
