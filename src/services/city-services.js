const { CityRepository } = require("../repository/index");

class CityServices {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    const city = await this.cityRepository.createCity(data);
    return city;
  }

  async bulkCreation(data) {
    try {
      if (!data || !Array.isArray(data)) {
        return res.status(400).json({
          message: "data is not Valid",
        });
      }
      const city = await this.cityRepository.bulkCityCreate(data);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(userId) {
    const city = await this.cityRepository.deleteCity(userId);
    return true;
  }

  async getCity(userId) {
    const city = await this.cityRepository.getCity(userId);
    return city;
  }

  async updateCity(cityId, data) {
    const city = await this.cityRepository.updateCity(cityId, data);
    return city;
  }

  async getAllCities() {
    const allcity = await this.cityRepository.getAllCities();
    return allcity;
  }
}

module.exports = CityServices;
