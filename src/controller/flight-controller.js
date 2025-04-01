const { FlightService } = require("../services/index");
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const response = await flightService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Flight is saved in database",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something Wrong in data",
            err: error,
        });
    }
};

module.exports = {
    create,
};
