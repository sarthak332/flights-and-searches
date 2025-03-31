const express = require("express");
const router = express.Router();
const {  create,
    createInOneGo,
    updateCity,
    destroy,
    getCity,
    getingAll,

} = require("../../controller/city-controller");

router.post("/city/bulk", createInOneGo)
router.post("/city",create);
router.delete("/city/:id", destroy);
router.get("/city/all", getingAll);
router.get("/city/:id", getCity);
router.patch("/city/:id", updateCity);

module.exports = router;