const axios = require("axios");
const { AUTH_SERVICE_PATH } = require("../config/ServerConfig");
const {
  Flightrepository,
  AiroplaneRepository,
} = require("../repository/index");

class FlightService {
  constructor() {
    this.airoplaneRepository = new AiroplaneRepository();
    this.flightRepository = new Flightrepository();
  }
  async create(data, header) {
    try {
      const token = req.headers["x-auth-token"];
      const isAdmin = await axios.post(
        `${AUTH_SERVICE_PATH}/api/v1/isAuthenticatedAdmin`,{},
        { 
          headers: { 
          "x-auth-token": token 
        }
      }
      );
      if(!isAdmin.data.data){
        throw new Error("Upcoming User is not Admin only Admin Allow To register a flight");
      }
      const Airplanedata = await this.airoplaneRepository.getAirplane(
        data.airplaneId
      );
      const response = await this.flightRepository.create({
        ...data,
        totalSeats: Airplanedata.capacity,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getAllFlight(filter) {
    try {
      const response = await  this.flightRepository.getAllFlight(filter);
      return response;
    } catch (error) {
      console.log("Something Went Wrong inside Service Layer", error);
      throw error;
    }
  }

  async getflight(flightId){
    try {
      const response = await this.flightRepository.getflight(flightId);
      return response;
    } catch (error) {
      console.log("Something Went wrong in service layer");
      throw error;
    }
  }
  async updateFlight(flightId, data){
      try {
      const response = await this.flightRepository.update(flightId, data);
      return response;
    } catch (error) {
      console.log("Something Went wrong in service layer");
      throw error;
    }
  }
}

module.exports = FlightService;