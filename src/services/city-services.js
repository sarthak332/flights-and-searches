const {CityRepository} = require("../repository/index");

class CityServices{
    constructor(){
        this.cityRepository = new CityRepository;
    };

    async createCity(data){
        const city = await this.cityRepository.createCity(data);
        return city;
    }

    async deleteCity(userId){
        const city = await this.cityRepository.deleteCity(userId);
        return true;
    }

    async getCity(userId){
       const city = await this.cityRepository.getCity(userId);
       return city;
    }
    
     async updateCity(cityId, data){
       const city = await this.cityRepository.updateCity(cityId, data);
       return city;
     }



     async getAllCities(){
        const allcity = await this.cityRepository.getAllCities();
        return allcity;
     }
}

module.exports = CityServices;