const {AiroplaneRepository} = require("../repository/index");

class AiroplaneService{
    constructor(){
        this.airoplaneRepository = new AiroplaneRepository;
    }
    async create(data){
        try {
            const response = await this.airoplaneRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something Went Wrong Overhere");
            throw {error};
        }
    }
}

module.exports = AiroplaneService;