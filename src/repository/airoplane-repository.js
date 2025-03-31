const {Airoplane} =  require("../models/index");

class AiroplaneRepository{
    async getAirplane(aeroplainId){
      try { const response = await Airoplane.findByPk(aeroplainId);
        return response;}
        catch(error){
            console.log("SomeThing Went Wrong here");
            throw {error};
        }
    }
}

module.exports = AiroplaneRepository;