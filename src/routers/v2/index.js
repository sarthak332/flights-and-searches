const express = require("express");
const {
    create, 
    get,
    destroy,
    update
    } = require("../../controller/airport-controller");
const router = express.Router();

router.post("/airport/create", create);
router.get("/airport/:id", get);
router.delete("/airport/:id", destroy);
router.patch("/airport/:id",update);

module.exports = router;