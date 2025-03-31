const express = require("express");
const {
    create, 
    getAirport,
    destroy,
    update
    } = require("../../controller/airport-controller");
const router = express.Router();

router.post("/airport/create", create);
router.get("/airport/:id", getAirport);
router.delete("/airport/:id", destroy);
router.patch("/airairport/:id",update);

module.exports = router;