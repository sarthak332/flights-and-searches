const express = require("express");
const router = express.Router();

const cityController = require("../../controller/city-controller");
const flightController = require("../../controller/flight-controller");

const {validateCreateFlight} = require("../../middleware/flight-middleware")

router.post("/city/bulk", cityController.createInOneGo)
router.post("/city",cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/all", cityController.getingAll);
router.get("/city/:id", cityController.getCity);
router.patch("/city/:id", cityController.updateCity);

router.post("/flight",validateCreateFlight, flightController.create);
router.get("/flight", flightController.getAllFlight);
router.get("/flight/:id", flightController.getflight);
router.patch("/flight/:id", flightController.update);
module.exports = router;