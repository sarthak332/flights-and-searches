const { where } = require("sequelize");
const { Flight } = require("../models/index");
const { Op } = require("sequelize");
const { ValidationError, AppError } = require("../utils");
class Flightrepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    let priceFilter = [];
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
  }

  async create(data) {
    try {
      const response = await Flight.create(data);
      return response;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new ValidationError(error);
      }
      throw new AppError(
        "Something went wrong",
        "Something went wrong in the repository layer"
      );
    }
  }

  async getAllFlight(data) {
    try {
      const filterObject = this.#createFilter(data);
      const response = await Flight.findAll({
        where: filterObject,
      });
      return response;
    } catch (error) {
      console.log("Something Went Wrong Overhere:");
      throw error;
    }
  }
  async getflight(flightId) {
    try {
      const response = await Flight.findByPk(flightId);
      return response;
    } catch (error) {
      console.log("Something Went Wrong Overhere:");
      throw error;
    }
  }
  async update(flightId, data) {
    try {
      await Flight.update(data, {
        where: {
          id: flightId,
        },
      });
    } catch (error) {
      console.log("Something Went Wrong Service Layer:");
      throw error;
    }
  }
}

module.exports = Flightrepository;
