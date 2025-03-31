const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({ name }); // Pass an object with key-value pair
            return city;
        } catch (error) {
            console.error("Something went wrong in the repository");
            throw {error};
        }
    }
    async deleteCity(cityId) {
        try {
            const response = await City.destroy({
                where: { id: cityId },
            });
            return response;
        } catch (error) {
            console.error("Something went wrong in the repository");
            throw {error};
        }
    }

     async updateCity(cityId, data){ // {name : pryagraj}
        try{
        // const city = await City.update(data, {
        //     where : {
        //         id : cityId
        //     }
        // });
        const city = await City.findByPk(cityId); 
        if (!city) {
          throw new Error(`City with ID ${cityId} not found`);
        }
        city.name = data.name;
        await city.save();
        return city;
        }catch(error){
            console.error("Something went wrong in the repository");
            throw {error};
        }
     }
     
     async getCity(cityId){
       try{ 
        const city = await City.findByPk(cityId);
        return city
    }
        catch(error){
            console.log("Something went wrong in the repository");
            throw {error};
        }
     }

     async getAllCities(){
        try{
          const city = await City.findAll();
          return city;
        }catch(error){
            console.log("Something went wrong in the repository");
            throw {error};
        }
     }
     async bulkCityCreate(data){
        try{
           const city = City.bulkCreate(data);
           return city;
        }catch(error){
            console.log("Something went wrong in the repository");
            throw {error};
        }
     }
}

module.exports = CityRepository;
