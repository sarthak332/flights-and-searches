const { where } = require("sequelize");
const { Flight } = require("../models/index");
const { Op } = require("sequelize");
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
    Object.assign(filter, {[Op.and]:priceFilter})
    return filter;
  }


  async create(data) {
    try {
      const response = await Flight.create(data);
      return response;
    } catch (error) {
      console.log("Something Went Wrong Overhere:");
      throw error;
    }
  }

  async getFlight(data) {
    try {
      const filterObject = this.#createFilter(data);  
      const response = await Flight.findAll({
        where: filterObject
      });
      return response
    } catch (error) {
      console.log("Something Went Wrong Overhere:");
      throw error;
    }
  }
}

module.exports = Flightrepository;
