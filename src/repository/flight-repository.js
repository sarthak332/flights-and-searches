const { Flight } = require("../models/index");

class Flightrepository {
    async create(data) {
        try {
            const response = await Flight.create(data);
            console.log(response);
            return response;
        } catch (error) {
            console.log("Something Went Wrong Overhere:", error);
            throw error;
        }
    }
}

module.exports = Flightrepository;
