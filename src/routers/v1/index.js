const express = require("express");
const router = express.Router();
const cityController = require("../../controller/city-controller");
const flightController = require("../../controller/flight-controller");
router.post("/city/bulk", cityController.createInOneGo)
router.post("/city",cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/all", cityController.getingAll);
router.get("/city/:id", cityController.getCity);
router.patch("/city/:id", cityController.updateCity);

router.get("/flight", flightController.getFlight);
router.post("/flight", flightController.create);
module.exports = router;