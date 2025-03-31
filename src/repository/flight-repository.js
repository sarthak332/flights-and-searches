const {Flight} = require("../models/index");
class Flightrepository{
    async create(data){
        try{
         const response = await Flight.create(data);
        }catch(error){
            console.log("Something Went Wrong Overhere");
            throw {error};
        }
    }
}

module.exports = Flightrepository;