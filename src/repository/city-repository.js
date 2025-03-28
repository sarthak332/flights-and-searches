const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({ name }); // Pass an object with key-value pair
            console.log("City created:", city.toJSON()); // Log the created city
            return city;
        } catch (error) {
            console.error("Error creating city:", error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            const deletedRows = await City.destroy({
                where: { id: cityId },
            });
            return true;
        } catch (error) {
            console.error("Error deleting city:", error);
            throw error;
        }
    }

     async updateCity(newData, userid){
        try{
        const city = await City.update(newData, {
            where : {
                id : userid
            }
        });
        return city;
        }catch(error){
            console.error("Error deleting city:", error);
            throw error;
        }
     }
     
     async getCity(userid){
       try{ const city = await City.findByPk(userid);
        return city}
        catch(error){
            console.log(error);
            throw error;
        }
     }

     async getAllCities(){
        try{
          const data = await City.findAll();
          return data;
        }catch(error){
            console.log(error);
            throw error;
        }
     }
}

module.exports = CityRepository;
