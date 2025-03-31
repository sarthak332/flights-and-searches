const {FlightRepository, AiroplaneRepository} = require("../repository/index");

class FlightService{
    constructor(){
        this.airoplaneRepository = new AiroplaneRepository;
        this.flightRepository  = new FlightRepository;
    }
    async create(data){
        try{
        const Airplanedata = await this.airoplaneRepository.create(data.airoplaneId);
        const response = await this.flightRepository({...data, totalSeats:Airplanedata.capacity});
        return response;
        }catch(error){
            console.log("SomeThing Went Wrong  Overhere");
            throw {error};
        }
    }

}

module.exports = FlightService;